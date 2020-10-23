var MainScript = (function () {
    var self = this;
    var REX_IS_NUMBER = new RegExp('^[0-9]*$');
    var REX_LOWERCASE = new RegExp('(?=.*[a-z])');
    var REX_UPPERCASE = new RegExp('(?=.*[A-Z])');
    var REX_NUMBER = new RegExp('(?=.*[0-9])');
    var REX_SPECIAL = new RegExp('(?=.[!@#\$%\^&])');
    var REX_INTERGER = new RegExp('^[0-9]*$');
    var REX_PHONE = new RegExp('^(0|84)[0-9]*$');
    var REX_EMAIL = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var REX_URL = new RegExp(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i);

    var _init = function () {
        self.PopupValidateForm();
        self.Block1ValidateForm();
        self.Block7ValidateForm();
        self.Block11ValidateForm();
        self.Block5Slider();
        self.Block10Slider();
        self.Block8Slider();
        self.Block8Tabs();
        self.Menu();
        self.OpenMenu();
        self.CloseMenu();
        self.lightbox();
    }
    var _resize = function () { }

    this.lightbox = function () {
        $('.fancybox').fancybox();
    }

    this.Block8Tabs = function () {
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            let href = $(this).attr('href');
            console.log(href);
            $('.block8__slider').removeClass('show')
            $('.block8__slider[data-slide="' + href + '"]').addClass('show')

            let id = href.split('#')[1];
            console.log('id', id);

            $('.block8__left .tab-pane').removeClass('show active')
            $('.block8__left .tab-pane[id="mb_' + id + '"]').addClass('show active')

        })
    }

    this.Block10Slider = function () {
        if ($(".block10__sliders").length === 0) {
            return false
        }

        $('.block10__sliders').slick({
            slidesToShow: 1,
            arrows: false,
            dots: true,
            autoplay: false,
        });
    }

    this.Block5Slider = function () {
        if ($(".block5__slider").length === 0) {
            return false
        }

        $(".block5__slider").slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000
        });
    }
    this.Block8Slider = function () {
        if ($(".block8__slider").length === 0) {
            return false
        }

        $(".block8__slider").slick({
            arrows: false,
            dots: true,
            autoplay: false,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            infinite: false
        });
    }

    this.PopupValidateForm = function () {
        var form = [{
            name: '.PopupName',
            validators: ['required']
        }, {
            name: '.PopupPhone',
            validators: ['required', 'isNumber', 'minLength', 'maxLength'],
            minLength: 10,
            maxLength: 10,
        }, {
            name: '.PopupEmail',
            validators: ['required']
        }, {
            name: '.PopupNote',
            validators: []
        }]
        var $submit = ".popup__button button";
        validateForm($submit, form);
    }

    this.Block1ValidateForm = function () {
        var form = [{
            name: '.block1Name',
            validators: ['required']
        }, {
            name: '.block1Phone',
            validators: ['required', 'isNumber', 'minLength', 'maxLength'],
            minLength: 10,
            maxLength: 10,
        }, {
            name: '.block1Email',
            validators: ['required']
        }, {
            name: '.block1Note',
            validators: []
        }]
        var $submit = ".block1__form-button button";
        validateForm($submit, form);
    }

    this.Block7ValidateForm = function () {
        var form = [{
            name: '.block7Name',
            validators: ['required']
        }, {
            name: '.block7Phone',
            validators: ['required', 'isNumber', 'minLength', 'maxLength'],
            minLength: 10,
            maxLength: 10,
        }, {
            name: '.block7Email',
            validators: ['required']
        }, {
            name: '.block7Note',
            validators: []
        }]
        var $submit = ".block7__form-button button";
        validateForm($submit, form);
    }

    this.Block11ValidateForm = function () {
        var form = [{
            name: '.block11Name',
            validators: ['required']
        }, {
            name: '.block11Phone',
            validators: ['required', 'isNumber', 'minLength', 'maxLength'],
            minLength: 10,
            maxLength: 10,
        }, {
            name: '.block11Email',
            validators: ['required']
        }, {
            name: '.block11Note',
            validators: []
        }]
        var $submit = ".block11__form-button button";
        validateForm($submit, form);
    }

    this.Menu = function () {
        $('.menu__absolute a').click(function (e) {
            e.preventDefault();

            let link = $(this).attr('link')

            // $('.menu__absolute a').removeClass('active');
            $('.menu__absolute a[link="' + link + '"]').addClass('active');


            if (link != '' && link != undefined) {
                goToByScroll(link);
            }
        })
    }

    function goToByScroll(echo) {
        $('html,body').animate({
            scrollTop: $("#" + echo).offset().top,
        }, 'slow');
    }

    this.OpenMenu = function () {
        $('.menu__text_toggle').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                $('.menu__absolute').removeClass('active')
            } else {
                $(this).addClass('active')
                $('.menu__absolute').addClass('active')
            }
        })
    }
    this.CloseMenu = function () {
        $('.menu__toggle_close').click(function () {
            $('.menu__text_toggle').removeClass('active')
            if ($('.menu__absolute').hasClass('active')) {
                $('.menu__absolute').removeClass('active')
            } else {
                $('.menu__absolute').addClass('active')
            }
        })
    }



    /**
     * Validate form
     * @param {{name,validators}[]} form
     */
    function isValidForm(form) {
        isValid = true;

        form.forEach(function (input) {
            var value = $(input.name).val();
            input.validators.forEach(function (validator) {
                switch (validator) {
                    case 'required':
                        if (value === '') {
                            isValid = false;
                        }
                        break;
                    case 'isNumber':
                        if (REX_IS_NUMBER.test(value) === false) {
                            isValid = false;
                        }
                        break;
                    case 'min':
                        if (+value < input.min) {
                            isValid = false;
                        }
                        break;
                    case 'max':
                        if (+value > input.max) {
                            isValid = false;
                        }
                        break;
                    case 'minLength':
                        if (value.length < input.minLength) {
                            isValid = false;
                        }
                        break;
                    case 'maxLength':
                        if (value.length > input.maxLength) {
                            isValid = false;
                        }
                        break;
                    case 'email':
                        if (REX_EMAIL.test(value) === false) {
                            isValid = false;
                        }
                        break;
                }
            });
        });

        return isValid;
    }

    function validateForm($submit, form) {

        function updateView() {
            $($submit).attr("disabled", !isValidForm(form));
        }

        var arrElement = [];
        form.forEach(function (element) {
            arrElement.push(element.name);
        });

        $(arrElement.join(",")).on("change keyup", function () {
            updateView();
        });
        updateView();
    }

    return {
        init: _init,
        resize: _resize
    }
});

var mainScript = new MainScript();

$(window).on("load", function () {
    mainScript.init();
    new WOW().init();

    activeItemMenu()
});

$(window).on("resize", function () {
    mainScript.resize();
});

var sections = $('section')
    , nav = $('.menu__absolute')
    , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    activeItemMenu()
});

function activeItemMenu() {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - 50,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
}