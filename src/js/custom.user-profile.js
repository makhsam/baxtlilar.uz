$(document).ready(function() {
    var datepicker_error_message = "Введите дату в формате dd/mm/yyyy.";
    var birthday_error_message = "Неверное дата рождение.";
    var passport_error_message = "Недействительная серия паспорта.";
    var user_liked_sb = $('#user-liked-sb');

    user_liked_sb.click(function() {
        if (user_liked_sb.hasClass('active')) {
            user_liked_sb.removeClass('active');
            user_liked_sb.text('Нравиться');
        } else {
            user_liked_sb.addClass('active');
            user_liked_sb.text('Понравилось');
        }
    });

    
    // Redirect to given URL when table row is clicked
    $('#table-like').on('click', 'td:not(.col-3)', function() {
        var url = $(this).closest('tr').data('url');
        // console.log(url);
        window.location.href = url;
    });


    // JQuery Validator Custom Functions
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

    // Jquery Validator
    // var form = $("#user-form-data");
    $("#user-form-data").validate({
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
            tel_parents: {
                required: true,
            },
            tel_siblings: {
                required: true,
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
                //accept: "image/*,application/pdf"
            }, 

            // Step #2
            nickname: {
                required: true
            },
            user_sex: {
                required: true,
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
            },
            citizenship: {
                required: true,
            },
            religion: {
                required: true,
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
            },
            attitude_to_alcohol: {
                required: true,
            },
            attitude_to_narcotic: {
                required: true,
            },
            health: {
                required: true
            },
            financial_situation: {
                required: true,
            },
            living_space: {
                required: true,
            },
            is_ready_to_live_together: {
                required: true,
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
            },
            partner_family_status: {
                required: true,
            },
            partner_living_space: {
                required: true,
            },
            partner_attitude_to_smoking: {
                required: true,
            },
            partner_attitude_to_alcohol: {
                required: true,
            },
            partner_attitude_to_narcotic: {
            },
            partner_finance: {
                required: true,
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
            },
            profile_mode: {
                required: true,
            },
            where_get_us: {
                required: true
            },
            relative_name_1: {
                required: true,
            },
            relative_email_1: {
                required: true,
            },
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
            tel_parents: {
                required: "Это поле обязательно к заполнению",
            },
            tel_siblings: {
                required: "Это поле обязательно к заполнению",
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
                // accept: "Недействительный тип файла"
            }, 

            // Step #2
            nickname: {
                required: "Это поле обязательно к заполнению",
            },
            user_sex: {
                required: "Это поле обязательно к заполнению",
            },
            age: {
                required: "Это поле обязательно к заполнению",
                range: "Не действительный возраст"
            },
            birth_place: {
                required: "Это поле обязательно к заполнению",
            },
            nationality: {
                required: "Это поле обязательно к заполнению",
            },
            zodiak: {
                required: "Это поле обязательно к заполнению",
            },
            height: {
                required: "Это поле обязательно к заполнению",
                range: "Не действительный рост"
            },
            weight: {
                required: "Это поле обязательно к заполнению",
                range: "Не действительный вес"
            },
            eye_color: {
                required: "Это поле обязательно к заполнению",
            },
            citizenship: {
                required: "Это поле обязательно к заполнению",
            },
            religion: {
                required: "Это поле обязательно к заполнению",
            },
            attitude_to_religion: {
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
                required: "Это поле обязательно к заполнению",
            },
            partner_age_to: {
                required: "Это поле обязательно к заполнению",
            },
            partner_country: {
                required: "Это поле обязательно к заполнению",
            },
            partner_nationality: {
                required: "Это поле обязательно к заполнению",
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
                required: "Это поле обязательно к заполнению",
            },
            partner_height_to: {
                required: "Это поле обязательно к заполнению",
            },
            partner_weight_from: {
                required: "Это поле обязательно к заполнению",
            },
            partner_weight_to: {
                required: "Это поле обязательно к заполнению",
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
            }
        }
    });
});