
var profile_error_message = "Убедитесь, что вы выбрали файлы: jpg, jpeg, или png.";
var datepicker_error_message = "Введите дату в формате dd/mm/yyyy.";
var birthday_error_message = "Неверное дата рождение.";
var passport_error_message = "Недействительная серия паспорта.";
var select_field_error_msg = "Выберите другое поле.";
var profile_img_error_msg = "Пожалуйста, выберите все пять изображений";

var html_body = $('html, body');

// Checks whether file type matches with given extension
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

$(document).ready(function(){

    // User typed valid date
    $.validator.addMethod("datePicker",
        function(value, element) {
            return this.optional(element) || value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
        }, datepicker_error_message
    ); 
    // Validates that given year between [1900, 2003]
    $.validator.addMethod("birthDate",
        function(value, element) {
            var date = new Date();
            var this_year = date.getFullYear();
            var birthday = value.split('/');
            if (birthday[2] >= this_year-15 || birthday[2] <= 1900) {
                return this.optional(element) || false;
            } 
            return this.optional(element) || true;
        }, birthday_error_message
    );
    // Validate passport format
    $.validator.addMethod("passportFormat",
        function(value, element) {
            return value.length == 10;
            //return value.match(/^[A-Z]?\-[0-9]{7}$/);
        }, passport_error_message
    ); 
    // Validate select input
    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg !== value;
    }, select_field_error_msg);

    $(".btn-next").click(function(){
        
        var form = $("#register");
        form.validate({
            errorElement: 'span',
            errorClass: 'help-block',
            highlight: function(element, errorClass, validClass) {
                $(element).closest('.form-group').addClass("has-error");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).closest('.form-group').removeClass("has-error");
            },
            rules: {
                // Step #1
                fullname: {
                    required: true
                },
                birthday: {
                    required: true,
                    datePicker: true,
                    birthDate: true,
                }, 
                country: {
                    required: true,
                    valueNotEquals: "default"
                },
                city: {
                    required: true
                },
                address: {
                    required: true,
                    minlength: 5,
                },
                tel_number: {
                    required: true,
                },
                mobile_number: {
                    required: true,
                }, 
                email: {
                    required: true,
                    email: true
                },
                passport_serial: {
                    required: true,
                    passportFormat: true,
                },
                passport_issued_by: {
                    required: true,
                },
                passport_when_issued: {
                    required: true,
                },
                passport_img: {
                    required: true,
                    accept: "image/*,application/pdf"
                }, 

                // Step #2
                nickname: {
                    required: true
                },
                user_sex: {
                    required: true,
                    valueNotEquals: "default"
                },
                age: {
                    required: true,
                    range: [5,150]
                },
                birth_place: {
                    required: true,
                },
                nationality: {
                    required: true,
                },
                zodiak: {
                    required: true,
                    valueNotEquals: "default"
                },
                height: {
                    required: true,
                    range: [20,350]
                },
                weight: {
                    required: true,
                    range: [10,350]
                },
                eye_color: {
                    required: true,
                    valueNotEquals: "default"
                },
                citizenship: {
                    required: true,
                },
                religion: {
                    required: true,
                    valueNotEquals: "default"
                },
                attitude_to_religion: {
                    required: true
                },
                education: {
                    required: true
                },
                employment: {
                    required: true,
                },
                profession: {
                    required: true,
                },
                hobby: {
                    required: true,
                },
                family_status: {
                    required: true,
                    valueNotEquals: "default"
                },
                kids: {
                    required: true,
                    minlength: 10
                },

                // Step #3
                dad_info: {
                    required: true,
                    minlength: 3
                },
                mum_info: {
                    required: true,
                    minlength: 3
                },
                brother_info: {
                    required: true,
                    minlength: 3
                },
                sister_info: {
                    required: true,
                    minlength: 3
                },
                parents_marriage: {
                    required: true,
                },
                attitude_to_smoking: {
                    required: true,
                    valueNotEquals: "default"
                },
                attitude_to_alcohol: {
                    required: true,
                    valueNotEquals: "default"
                },
                attitude_to_narcotic: {
                    required: true,
                    valueNotEquals: "default"
                },
                health: {
                    required: true
                },
                financial_situation: {
                    required: true,
                    valueNotEquals: "default"
                },
                living_space: {
                    required: true,
                    valueNotEquals: "default"
                },
                is_ready_to_live_together: {
                    required: true,
                    valueNotEquals: "default"
                },
                about: {
                    required: true,
                    minlength: 10,
                },

                // Step #4
                partner_age_from: {
                    required: true,
                },
                partner_age_to: {
                    required: true,
                },
                partner_country: {
                    required: true,
                },
                partner_nationality: {
                    required: true,
                },
                partner_religion: {
                    required: true,
                    valueNotEquals: "default"
                },
                partner_family_status: {
                    required: true,
                    valueNotEquals: "default"
                },
                partner_living_space: {
                    required: true,
                    valueNotEquals: "default"
                },
                partner_attitude_to_smoking: {
                    required: true,
                    valueNotEquals: "default"
                },
                partner_attitude_to_alcohol: {
                    required: true,
                    valueNotEquals: "default"
                },
                partner_attitude_to_narcotic: {
                    valueNotEquals: "default"
                },
                partner_finance: {
                    required: true,
                    valueNotEquals: "default"
                },
                partner_profession: {
                    required: true
                },
                partner_height_from: {
                    required: true,
                },
                partner_height_to: {
                    required: true,
                },
                partner_weight_from: {
                    required: true
                },
                partner_weight_to: {
                    required: true
                },
                partner_attitude_to_childs: {
                    required: true,
                    valueNotEquals: "default"
                },
                profile_mode: {
                    required: true,
                    valueNotEquals: "default"
                },
                where_get_us: {
                    required: true
                },
                relative_name_1: {
                    required: true,
                },
                relative_email_1: {
                    required: true,
                    email: true
                },
                
                terms_n_conditions: {
                    required: true,
                }
                
            },
            
            /**
             * ===================( DISPLAYED MESSAGES )===========================
             */
            
            messages: {

                // Step #1
                fullname: {
                    required: "Это поле обязательно к заполнению",
                },
                birthday: {
                    required: "Это поле обязательно к заполнению",
                }, 
                country: {
                    required: "Это поле обязательно к заполнению",
                },
                city: {
                    required: "Это поле обязательно к заполнению",
                },
                address: {
                    required: "Это поле обязательно к заполнению",
                    minlength: "Введите не менее 5 символов",
                },
                tel_number: {
                    required: "Это поле обязательно к заполнению",
                },
                mobile_number: {
                    required: "Это поле обязательно к заполнению",
                }, 
                email: {
                    required: "Это поле обязательно к заполнению",
                    email: "Введите действующий адрес электронной почты"
                },
                passport_serial: {
                    required: "Это поле обязательно к заполнению",
                },
                passport_issued_by: {
                    required: "Это поле обязательно к заполнению",
                },
                passport_when_issued: {
                    required: "Это поле обязательно к заполнению",
                },
                passport_img: {
                    required: "Это поле обязательно к заполнению",
                    accept: "Недействительный тип файла"
                }, 

                // Step #2
                nickname: {
                    required: "Заполните поле",
                },
                user_sex: {
                    required: "Это поле обязательно к заполнению",
                },
                age: {
                    required: "Заполните поле",
                    range: "Не действительный возраст"
                },
                birth_place: {
                    required: "Заполните поле",
                },
                nationality: {
                    required: "Заполните поле",
                },
                zodiak: {
                    required: "Это поле обязательно к заполнению",
                },
                height: {
                    required: "Заполните поле",
                    range: "Не действительный рост"
                },
                weight: {
                    required: "Заполните поле",
                    range: "Не действительный вес"
                },
                eye_color: {
                    required: "Это поле обязательно к заполнению",
                },
                citizenship: {
                    required: "Заполните поле",
                },
                religion: {
                    required: "Это поле обязательно к заполнению",
                },
                attitude_to_religion: {
                    required: "Заполните поле",
                },
                education: {
                    required: "Заполните поле",
                },
                employment: {
                    required: "Заполните поле",
                },
                profession: {
                    required: "Заполните поле",
                },
                hobby: {
                    required: "Это поле обязательно к заполнению",
                },
                family_status: {
                    required: "Это поле обязательно к заполнению",
                },
                kids: {
                    required: "Это поле обязательно к заполнению",
                    minlength: "Введите не менее 5 символов"
                },

                // Step #3
                dad_info: {
                    required: "Это поле обязательно к заполнению",
                    minlength: "Введите не менее 5 символов"                
                },
                mum_info: {
                    required: "Это поле обязательно к заполнению",
                    minlength: "Введите не менее 5 символов"                
                },
                brother_info: {
                    required: "Это поле обязательно к заполнению",
                    minlength: "Введите не менее 5 символов"                
                },
                sister_info: {
                    required: "Это поле обязательно к заполнению",
                    minlength: "Введите не менее 5 символов"                
                },
                parents_marriage: {
                    required: "Это поле обязательно к заполнению"
                },
                attitude_to_smoking: {
                    required: "Это поле обязательно к заполнению",
                },
                attitude_to_alcohol: {
                    required: "Это поле обязательно к заполнению",
                },
                attitude_to_narcotic: {
                    required: "Это поле обязательно к заполнению",
                },
                health: {
                    required: "Это поле обязательно к заполнению",
                },
                financial_situation: {
                    required: "Это поле обязательно к заполнению",
                },
                living_space: {
                    required: "Это поле обязательно к заполнению",
                },
                is_ready_to_live_together: {
                    required: "Это поле обязательно к заполнению",
                },
                about: {
                    required: "Это поле обязательно к заполнению",
                    minlength: "Введите не менее 5 символов",
                },

                // Step #4
                partner_age_from: {
                    required: "Заполните поле",
                },
                partner_age_to: {
                    required: "Заполните поле",
                },
                partner_country: {
                    required: "Заполните поле",
                },
                partner_nationality: {
                    required: "Заполните поле",
                },
                partner_religion: {
                    required: "Это поле обязательно к заполнению",
                },
                partner_family_status: {
                    required: "Это поле обязательно к заполнению",
                },
                partner_living_space: {
                    required: "Это поле обязательно к заполнению",
                },
                partner_attitude_to_smoking: {
                    required: "Это поле обязательно к заполнению",
                },
                partner_attitude_to_alcohol: {
                    required: "Это поле обязательно к заполнению",
                },
                partner_attitude_to_narcotic: {
                    required: "Это поле обязательно к заполнению",
                },
                partner_finance: {
                    required: "Это поле обязательно к заполнению",
                },
                partner_profession: {
                    required: "Это поле обязательно к заполнению",
                },
                partner_height_from: {
                    required: "Заполните поле",
                },
                partner_height_to: {
                    required: "Заполните поле",
                },
                partner_weight_from: {
                    required: "Заполните поле",
                },
                partner_weight_to: {
                    required: "Заполните поле",
                },
                partner_attitude_to_childs: {
                    required: "Это поле обязательно к заполнению",
                },
                profile_mode: {
                    required: "Это поле обязательно к заполнению",
                },
                where_get_us: {
                    required: "Это поле обязательно к заполнению",
                },
                relative_name_1: {
                    required: "Это поле обязательно к заполнению",
                },
                relative_email_1: {
                    required: "Это поле обязательно к заполнению",
                    email: "Введите действующий адрес электронной почты"
                }, 
                terms_n_conditions: {
                    required: "Это поле обязательно к заполнению",
                }

            }
        });

       
        validateProfile();
        
        // When .btn-next is pressed
        if (form.valid() === true){
            if ($('#register_step1').is(":visible"))
            {
                current_fieldset = $('#register_step1');
                next_fieldset = $('#register_step2');
            } 
            else if($('#register_step2').is(":visible"))
            {
                current_fieldset = $('#register_step2');
                next_fieldset = $('#register_step3');
            } 
            else if($('#register_step3').is(":visible")) 
            {
                current_fieldset = $('#register_step3');
                next_fieldset = $('#register_step4');
            }
            
            
            if (validateProfile()) {
                next_fieldset.show(); 
                current_fieldset.hide();
                html_body.animate({
                    scrollTop: $('#registration-section').offset().top
                }, 500, 'easeInOutExpo');
            }
        }
    });
    // end btn_prev.click()

    // When prev button is clicked
    $('.btn-prev').click(function(){
        if($('#register_step2').is(":visible"))
        {
            current_fieldset = $('#register_step2');
            next_fieldset = $('#register_step1');
        }
        else if ($('#register_step3').is(":visible"))
        {
            current_fieldset = $('#register_step3');
            next_fieldset = $('#register_step2');
        }
        else if ($('#register_step4').is(":visible"))
        {
            current_fieldset = $('#register_step4');
            next_fieldset = $('#register_step3');
        }

        next_fieldset.show(); 
        current_fieldset.hide();
        html_body.animate({
            scrollTop: $('#registration-section').offset().top
        }, 500, 'easeInOutExpo');
    });



    // Mask for passport field
    $('#passport_serial').mask('ZZ-0000000', {
        placeholder: "__-_______",
        translation: {
            'Z': {
                pattern: /[A-Z]/
            }
        }
    });
    // Mask tel fields
    $('.tel-mask').mask('(00) 000 00 00');
    // Date Fields
    $('#birthday').mask('00/00/0000');
    $('#parents_marriage').mask('00/00/0000');

    // Hide and show input field to type other religion
    var other_religion_field = $('#other-religion-wrapper');
    $("input[name='religion']").change(function(e){
        if($(this).val() == 'other') {
            other_religion_field.show();
        } else {
            other_religion_field.hide();
        }
    });

    // Hide, show dad & mum info fieldset
    var conviction_field = $('#conviction_field').addClass('hide-fieldset');
    var conviction_checkbox = $('#conviction_checkbox');

    conviction_checkbox.click(function() {
        conviction_field[this.checked ? "removeClass" : "addClass"]('hide-fieldset');
    });


    // Disable & Enable Submit button when terms-n-conditions is checked
    var terms_checkbox = $("#terms_n_conditions");
    var btn_submit = $("#btn-submit").addClass("disabled").attr("type", "button");
    terms_checkbox.click(function() {
        if (this.checked) {
            btn_submit.removeClass("disabled").attr("type", "submit");
        } else {
            btn_submit.addClass("disabled").attr("type", "button");
        }
    });


    // Preview user images
    var is_profile_valid = [null, null, null, null, null];
    var profile_images = $('.user-profile-img');
    var profile_errors = $('#user-image-errors');
	var view_images = [
		$("#image-preview-01"),
		$("#image-preview-02"),
		$("#image-preview-03"),
		$("#image-preview-04"),
		$("#image-preview-05")
	];
    // Accepts DOM <img class"user-profile-img"> object and index of it
	function readURL(input, i) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
                view_images[i].attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
    }

    function validateProfile() {
        var flag = true;
        is_profile_valid.forEach(function(element) {
            if (!element) { flag = false; } 
        });
        if (flag) {
            profile_errors.text('');
            return true;
        } 
        profile_errors.text(profile_img_error_msg);
        return false;
       
    }

    function checkProfileErrors() {
        var flag = true;
        is_profile_valid.forEach(function(element) {
            if (element === false) { flag = false; } 
        });

        if (flag) {
            profile_errors.text('');
            return true;
        }
        profile_errors.text(profile_error_message); 
        return false;
    }

    // Validates file extension
    profile_images.checkFileType({
		allowedExtensions: ['jpg', 'jpeg', 'png'],
        success: function(this_obj) {
            var i = profile_images.index(this_obj);
            readURL(this_obj, i);
            is_profile_valid[i] = true;
            checkProfileErrors();
        },
        error: function(this_obj) {
            var i = profile_images.index(this_obj);
            view_images[i].attr('src', 'images/camera_error.jpg');  
            is_profile_valid[i] = false;
            checkProfileErrors();
        }
	});


	//Display passport path
    var user_passport = $('#passport');
    user_passport.change(function() {
	    var i = $(this).prev('label').clone();
		var file = user_passport[0].files[0].name;
		$(this).prev('label').text(file);
	});
	

});
