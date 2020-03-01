$(document).ready(function() {
    'use strict';

    $(':radio').change(function (event) {
        var id = $(this).data('id');
        var panel = $('.panel-content');
        panel.addClass('none');
        $('#' + id).removeClass('none');
    });

    $("#credit-form").validate({
        errorElement: 'span',
        errorClass: 'help-block',
        highlight: function(element, errorClass, validClass) {
            $(element).closest('.form-group').addClass("has-error");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass("has-error");
        },
        rules: {
            card_number: {
                required: true,
                minlength: 16
            },
            expiry_date: {
                required: true,
                // minlength: 5
            },
            cv_code: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            card_number: {
                required: "Это поле обязательно к заполнению",
                minlength: "Введите не менее 16 символов"
            },
            expiry_date: {
                required: "Это поле обязательно к заполнению",
                // minlength: ""
            },
            cv_code: {
                required: "Это поле обязательно к заполнению",
                minlength: "Введите не менее 3 символов"
            }
        }
    });
})