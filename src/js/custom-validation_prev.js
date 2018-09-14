/**
 * DISPLAYED MESSAGES IN REGISTERATION: [RU]
 */
var profile_error_message = "Убедитесь, что вы выбрали файлы: jpg, jpeg, или png";
var passport_error_message = "Убедитесь, что вы выбрали файлы: jpg, jpeg, png, или pdf";
var birthday_error_message = "Пожалуйста, введите действительную дату рождения";

// DEFAULT OPTION FOR "Желаемая страна проживания" FIELD:
var default_preferred_country = "Без разницы";
var form_section_error_messages = "Пожалуйста, заполните все поля";


(function($) {
    $.fn.checkFileType = function(options) {
        var defaults = {
            allowedExtensions: [],
            success: function() {},
            error: function() {}
        };
        options = $.extend(defaults, options);

        return this.each(function() {

            $(this).on('change', function() {
                var value = $(this).val(),
                    file = value.toLowerCase(),
                    extension = file.substring(file.lastIndexOf('.') + 1);

                if ($.inArray(extension, options.allowedExtensions) == -1) {
                    options.error(this);
                    $(this).focus();
                } else {
                    options.success(this);

                }

            });

        });
    };
})(jQuery);


$(document).ready(function() {

	"use strict";

	var is_profile_valid = false;
	var profile_images = $('.user-profile-img');
	var preview_images = [
		$("#image-preview-01"),
		$("#image-preview-02"),
		$("#image-preview-03"),
		$("#image-preview-04"),
		$("#image-preview-05")
	];
	var profile_errors = $('#user-profile-errors');

	// Preview user images
	function readURL(input, i) {

		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function(e) {
			  	preview_images[i].attr('src', e.target.result);
			}

			reader.readAsDataURL(input.files[0]);
		}
	}

	// Validate user image types; Preview images
	profile_images.checkFileType({
		allowedExtensions: ['jpg', 'jpeg', 'png'],
        success: function(this_obj) {
            is_profile_valid = true;
            var index = profile_images.index(this_obj);
			readURL(this_obj, index);
			profile_errors.text('');
        },
        error: function(this_obj) {
            is_profile_valid = false;
            var i = profile_images.index(this_obj);
			preview_images[i].attr('src', 'images/camera_error.jpg');
			
            profile_errors.text(profile_error_message);
        }
	});


	// Validate passport type; Display passport path
	var user_passport = $('#user_passport');
	var is_passport_correct = false;

	user_passport.checkFileType({
        allowedExtensions: ['jpg', 'jpeg', 'png', 'pdf'],
        success: function() {
            is_passport_correct = true;
            $(".passport_upload label").css('border', '');
            $(".passport_upload span")
            	.text('jpg, jpeg, png, pdf')
            	.removeClass('text-danger');
        },
        error: function() {
            is_passport_correct = false;
			$(".passport_upload label").css('border', '1px solid #C9312D');
            $(".passport_upload span")
            	.text(passport_error_message)
				.addClass('text-danger');
        }
    });
	user_passport.change(function() {
	    var i = $(this).prev('label').clone();
		var file = user_passport[0].files[0].name;
		$(this).prev('label').text(file);
		
	});

	function checkBirthday() {
		var $datepicker = $("#user-birthday");
		if ($datepicker.val().length == 0) {
			// Error: empty field
			$("#user-birthday-wrap").addClass("has-error");
			return false;
		}

		var fullDate = new Date();
		var dates = $datepicker.val().split('/');
		console.log("User: "+dates[2]);
		console.log("Current: "+fullDate.getFullYear());
  
		if (dates[2] >= fullDate.getFullYear()-15) {
			// Error
			$("#user-birthday-wrap").addClass("has-error");
			$("#user-birthday-error").css('display', 'block');
			return false;
		} 
		
		// Success
		return true;
	}

	function isOthersFilled() {
		if (!is_profile_valid || !is_passport_correct) {
			return false;
		}
		if (wished_city.val() === default_preferred_country) {
			return false;
		}
		if (!terms_conditions.prop("checked")) {
			return false;
		}	
		
		return true;
	}

	/**
	* Iterate through DOM form field and push if they're not empty
	* Then compare length of fields_arr with given length
	* @param: array() of fields, length
	*/
	function isFieldsFilled(fields, length) { 

		var fields_array = [];

		fields.each(function() { //iterate each DOM elements
			var value = $(this).val().trim();
			if (value) {
				fields_array.push(value);
			}
		});

		if (fields_array.length < length) { 
			return false; 
		}
		return true;
	}


	// VALIDATE FIELDS IN STEP ONE : 
	var html_body = $('html, body');

	var btn_step1 = $('#btn-next-step1'); // href="#/step2"
	var inputs_step1 = $('.input-validation-step1');
	var warning_step1 = $('#warning-step1'); // <p> tag to display warnings


	btn_step1.click(function() {

		// isFieldsFilled(inputs_step1, 20) && 
		if (checkBirthday()) // if step-1 validation is TRUE 
		{ 
			btn_step1.attr("href", "#/step2");
			warning_step1.text("");
			html_body.animate({
		        scrollTop: $('#registration-section').offset().top
		    }, 500, 'easeInOutExpo');
		} 
		else // if step-1 validation is FALSE 
		{ 
			btn_step1.attr("href", "javascript:void(0)");
			warning_step1.text(form_section_error_messages);
		}

	});


	// VALIDATE FIELDS IN STEP TWO :
	var btn_step2 = $('#btn-next-step2'); // href="#/step3"
	var inputs_step2 = $('.input-validation-step2');
	var warning_step2 = $('#warning-step2'); // <p> tag to display warnings


	btn_step2.click(function() {

		if (isFieldsFilled(inputs_step2, 18)) // if step-2 validation is TRUE 
		{ 
			btn_step2.attr("href", "#/step3");
			warning_step2.text("");
			html_body.animate({
		        scrollTop: $('#registration-section').offset().top
		    }, 500, 'easeInOutExpo');
		} 
		else // if step-2 validation is FALSE 
		{ 
			btn_step2.attr("href", "javascript:void(0)");
			warning_step2.text(form_section_error_messages);
		}

	});


	// VALIDATE FIELDS IN STEP THREE (Validate all fields) 
	var registeration = $('#register');
	var btn_submit = $('#btn-submit');
	var inputs_step3 = $('.input-validation-step3');
	var warning_step3 = $('#warning-step3'); // <p> tag to display warnings
	var wished_city = $('#wished-city');
	var terms_conditions = $('#terms-n-conditions');
	//console.log(terms_conditions.prop("checked"));

	btn_submit.click(function() {

		if (isFieldsFilled(inputs_step1, 20) && 
			isFieldsFilled(inputs_step2, 18) && 
			isFieldsFilled(inputs_step3, 7) &&
			isOthersFilled()) // if all validations are TRUE 
		{ 
			warning_step3.text("");
			registeration.submit(); // submit the form
		} 
		else // if some validations are FALSE 
		{ 
			warning_step3.text(form_section_error_messages);
		}

    });



	// Scroll to top when PREVIOUS, NEXT buttons are clicked
	$(".scroll-to-top").click(function() {
	    $('html, body').animate({
	        scrollTop: $('#registration-section').offset().top
	    }, 500, 'easeInOutExpo'); // 'easeInOutExpo'
	});


});