
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
                name: "required",
                surname: "required",
                patronymic: "required",
                nickname: "required",
                birthday: {
                    required: true,
                    datePicker: true,
                    birthDate: true,
                }, 
                birth_place: {
                    required: true,
                    minlength: 5,
                },
                zodiak: {
                    required: true,
                },
                height: {
                    required: true,
                    range: [20,350]
                },
                weight: {
                    required: true,
                    range: [20,350]
                },
                country: {
                    required: true,
                },
                city: {
                    required: true,
                },
                house: {
                    required: true,
                }, 
                home: {
                    required: true,
                },
                tel: {
                    required: true,
                },
                mobile: {
                    required: true,
                }, 
                tel_relative: {
                    required: true,
                },
                passport: {
                    required: true,
                    accept: "image/*,application/pdf"
                }, 
                passport_serial: {
                    required: true,
                    passportFormat: true,
                },
                education: {
                    required: true,
                },
                employment: {
                    required: true,
                },
                profession: {
                    required: true,
                },
                attitude_to_alcohol: {
                    required: true,
                    valueNotEquals: "default"
                },
                attitude_to_smoking: {
                    required: true,
                    valueNotEquals: "default"
                },
                kids: {
                    required: true,
                    minlength: 10
                },
                nationality: {
                    required: true,
                },
                other_religion: {
                    required: true,
                },
                attitude_to_religion: {
                    required: true,
                },
                dad_name: {
                    required: "#dad_checkbox:checked",
                },
                dad_birthday: {
                    required: "#dad_checkbox:checked",
                },
                dad_national: {
                    required: "#dad_checkbox:checked",
                },
                dad_spec: {
                    required: "#dad_checkbox:checked",
                },
                dad_position: {
                    required: "#dad_checkbox:checked",
                },
                mum_name: {
                    required: "#mum_checkbox:checked",
                },
                mum_birthday: {
                    required: "#mum_checkbox:checked",
                },
                mum_national: {
                    required: "#mum_checkbox:checked",
                },
                mum_spec: {
                    required: "#mum_checkbox:checked",
                },
                mum_position: {
                    required: "#mum_checkbox:checked",
                },
                parents_marriage: {
                    required: true,
                    datePicker: true,
                },
                health: {
                    required: true,
                    minlength: 10,
                },
                hobby: {
                    required: true,
                },
                about: {
                    required: true,
                    minlength: 10,
                },
                where_get_us: {
                    required: true,
                },
                partner_age_from: {
                    required: true,
                },
                partner_age_to: {
                    required: true,
                },
                partner_profession: {
                    required: true,
                },
                partner_height: {
                    required: true,
                },
                partner_weight: {
                    required: true,
                },
                wished_city: {
                    required: true,
                    valueNotEquals: "default"
                },
                relative_name_1: {
                    required: true,
                },
                relative_email_1: {
                    required: true,
                    email: true
                },
                relative_name_2: {
                    required: true,
                },
                relative_email_2: {
                    required: true,
                    email: true
                },
                relative_name_3: {
                    required: true,
                },
                relative_email_3: {
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
                name: {
                    required: "Это поле обязательно к заполнению",
                },
                surname: {
                    required: "Это поле обязательно к заполнению",
                }, 
                patronymic: {
                    required: "Это поле обязательно к заполнению",
                }, 
                nickname: {
                    required: "Это поле обязательно к заполнению",
                },
                birthday: {
                    required: "Это поле обязательно к заполнению",
                }, 
                birth_place: {
                    required: "Это поле обязательно к заполнению",
                    minlength: "Введите не менее 5 символов"
                },
                zodiak: {
                    required: "Это поле обязательно к заполнению",
                },
                height: {
                    required: "Это поле обязательно к заполнению",
                    range: "Введите действительное значение",
                },
                weight: {
                    required: "Это поле обязательно к заполненбию",
                    range: "Введите действительное значение",
                },
                country: {
                    required: "Это поле обязательно к заполнению",
                },
                city: {
                    required: "Это поле обязательно к заполнению",
                },
                house: {
                    required: "Это поле обязательно к заполнению",
                }, 
                home: {
                    required: "Это поле обязательно к заполнению",
                },
                tel: {
                    required: "Это поле обязательно к заполнению",
                },
                mobile: {
                    required: "Это поле обязательно к заполнению",
                }, 
                tel_relative: {
                    required: "Это поле обязательно к заполнению",
                },
                passport: {
                    required: "Выберите паспорт",
                    accept: "Недействительный тип файла"
                }, 
                passport_serial: {
                    required: "Это поле обязательно к заполнению",
                },
                passport_number: {
                    required: "Это поле обязательно к заполнению",
                },
                education: {
                    required: "Это поле обязательно к заполнению",
                },
                employment: {
                    required: "Это поле обязательно к заполнению",
                },
                profession: {
                    required: "Это поле обязательно к заполнению",
                },
                kids: {
                    required: "Это поле обязательно к заполнению",
                },
                nationality: {
                    required: "Это поле обязательно к заполнению",
                },
                attitude_to_religion: {
                    required: "Это поле обязательно к заполнению",
                },
                dad_name: {
                    required: "Это поле обязательно к заполнению",
                },
                dad_birthday: {
                    required: "Это поле обязательно к заполнению",
                },
                dad_national: {
                    required: "Это поле обязательно к заполнению",
                },
                dad_spec: {
                    required: "Это поле обязательно к заполнению",
                },
                dad_position: {
                    required: "Это поле обязательно к заполнению",
                },
                mum_name: {
                    required: "Это поле обязательно к заполнению",
                },
                mum_birthday: {
                    required: "Это поле обязательно к заполнению",
                },
                mum_national: {
                    required: "Это поле обязательно к заполнению",
                },
                mum_spec: {
                    required: "Это поле обязательно к заполнению",
                },
                mum_position: {
                    required: "Это поле обязательно к заполнению",
                },
                parents_marriage: {
                    required: "Это поле обязательно к заполнению",
                },
                health: {
                    required: "Это поле обязательно к заполнению",
                },
                hobby: {
                    required: "Это поле обязательно к заполнению",
                },
                about: {
                    required: "Это поле обязательно к заполнению",
                },
                where_get_us: {
                    required: "Это поле обязательно к заполнению",
                },
                partner_age_from: {
                    required: "Это поле обязательно к заполнению",
                },
                partner_age_to: {
                    required: "Это поле обязательно к заполнению",
                },
                partner_profession: {
                    required: "Это поле обязательно к заполнению",
                },
                partner_height: {
                    required: "Это поле обязательно к заполнению",
                },
                partner_weight: {
                    required: "Это поле обязательно к заполнению",
                },
                wished_city: {
                    required: "Это поле обязательно к заполнению",
                },
                relative_name_1: {
                    required: "Это поле обязательно к заполнению",
                },
                relative_email_1: {
                    required: "Это поле обязательно к заполнению",
                    email: "Введите действующий адрес электронной почты"
                },
                relative_name_2: {
                    required: "Это поле обязательно к заполнению",
                },
                relative_email_2: {
                    required: "Это поле обязательно к заполнению",
                    email: "Введите действующий адрес электронной почты"
                },
                relative_name_3: {
                    required: "Это поле обязательно к заполнению",
                },
                relative_email_3: {
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
            if ($('#register_step1').is(":visible")){
                current_fieldset = $('#register_step1');
                next_fieldset = $('#register_step2');
            }else if($('#register_step2').is(":visible")){
                current_fieldset = $('#register_step2');
                next_fieldset = $('#register_step3');
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
        if($('#register_step2').is(":visible")){
            current_fieldset = $('#register_step2');
            next_fieldset = $('#register_step1');
        }else if ($('#register_step3').is(":visible")){
            current_fieldset = $('#register_step3');
            next_fieldset = $('#register_step2');
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
    var mum_field = $('#mum_fieldset').addClass('hide-fieldset');
    var dad_field = $('#dad_fieldset').addClass('hide-fieldset');
    var dad_checkbox = $('#dad_checkbox');
    var mum_checkbox = $('#mum_checkbox');

    dad_checkbox.click(function() {
        dad_field[this.checked ? "removeClass" : "addClass"]('hide-fieldset');
    });

    mum_checkbox.click(function() {
        mum_field[this.checked ? "removeClass" : "addClass"]('hide-fieldset');
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
