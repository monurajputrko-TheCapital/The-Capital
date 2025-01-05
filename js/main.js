$(function(){ 



    if(!$('header').is('.header-fixed')){

        $(window).on('scroll', function() {

            $(this).scrollTop() > 100 ? $('header').addClass('header-fixed') : $('header').removeClass('header-fixed');

        }); 

        $(window).scrollTop() > 100 ? $('header').addClass('header-fixed') : $('header').removeClass('header-fixed');

    }



    niceSelect($);

    $('select').niceSelect();



    // Search select require start

    //////////////////////////
    
    // Search select require end

    

    const formControls = $(".form-control");



    function handleForm() {

        const input = $(this);

        let isValid = false;

    

        if (input.is('select')) {

            isValid = this.value !== "" && this.value !== "0";

        } else {

            isValid = this.value !== "";

        }

    

        input.toggleClass("valid", isValid);

        input.parent('.form-group').toggleClass("active", isValid);

    }



    function throttle(callback, delay = 250) {

        let isThrottled = false;

        return function () {

            if (!isThrottled) {

            callback.apply(this, arguments);

            isThrottled = true;

            setTimeout(() => (isThrottled = false), delay);

            }

        };

    }



    formControls.on('focus input change blur', throttle(handleForm));



    formControls.each(function() {

        handleForm.call(this);

    });



    //



    function adjustWhatsAppUrls() {

        var screenWidth = $(window).width();



        if (screenWidth > 991) {

            $('a[href^="https://api.whatsapp.com/"]').each(function() {

                var currentHref = $(this).attr('href');

                var newHref = currentHref.replace('https://api.whatsapp.com/', 'https://web.whatsapp.com/');

                $(this).attr('href', newHref);

            });

        }

    }

    adjustWhatsAppUrls();

    $(window).resize(function() {

        adjustWhatsAppUrls();

    });

    



    //

    $('.tab-nav li').on('click', function () {

        var tab = $(this).addClass('active').siblings().removeClass('active').end().data('tab');

        $('.tab-nav-content .tabs[data-tab= ' + tab + ']').addClass('active').siblings().removeClass('active');

    });



    //

    $('[data-scrollTo]').on('click',function(){

        headerheight = parseInt($(':root').css('--headerfixed'));

        var section = $(this).attr('data-scrollTo');

        $('html, body').stop().animate({

            scrollTop: $(section).offset().top - headerheight

        }, 1000);

    });

    //

    $('[data-model]').on('click',function(){

        var model = $(this).attr('data-model');

        $('.model').removeClass('is-open');

        $(model).addClass('is-open');

        $('.overlay').addClass('is-open');

        $('body,html').toggleClass('overflow-hidden');

    });

    $('.overlay,.close').on('click',function(){

        $('.overlay,.model').removeClass('is-open');

        $('body,html').removeClass('overflow-hidden');

    });

    //

    $('[data-video]').on('click', function () {

        $('.video-pop').addClass('is-open');

        var src = $(this).attr('data-video');

        

        if (src.includes('youtube.com/embed/')) {

            var videoId = src.split('embed/')[1].split('?')[0];

            src += '&autoplay=1&loop=1&playlist=' + videoId;

        }

        

        $('#iframe1').attr('src', src);

    });

    $('.close-video').on('click', function () {

        $('#iframe1').attr('src', '');

        $('.video-pop').removeClass('is-open');

        $('body,html').removeClass('overflow-hidden');

    });



    //



    $('.faq-content .col:has(article) .title').click(function(){

        var $parentCol = $(this).parent('.col');

        $('.faq-content .col').not($parentCol).find('article').stop().slideUp();

        $('.faq-content .col').not($parentCol).removeClass('active');

        $parentCol.toggleClass('active');

        $(this).siblings('article').stop().slideToggle();

    }); 



    //



    jQuery.fn.extend({

        toggleText: function(text1, text2){

            return this.text(this.text() === text1 ? text2 : text1);

        }

    });



    $('[data-read]').each(function() {

        $(this).click(function(){

            $(this).siblings('.hide-content').stop().slideToggle();

            $(this).toggleText('Read Less', 'Read More');

            $(this).toggleClass('active');

        })

    });





    //



    function commonSwiperSlider(containerSelector, prevButtonSelector, nextButtonSelector,progressSelector) {



        return new Swiper(containerSelector, {

            loop: false,

        speed: 500,

        navigation: {

            prevEl: prevButtonSelector,

            nextEl: nextButtonSelector,

        },

        pagination: {

            enabled: true,

            el: progressSelector,

            type: "fraction",

        },

        breakpoints: {

            0: {

                slidesPerView: 1.3,

                spaceBetween: 10,

                speed: 500,

            },

            767: {

                slidesPerView: 2,

                spaceBetween: 15,

                speed: 2000,

            },

            1153: {

                slidesPerView: 2.6,

                spaceBetween: 23,

                speed: 1000,

            }

        }

        });



    }







    commonSwiperSlider('.home-property-slider-1', '.home-property-prev1', '.home-property-next1','.home-property-progress1');

    commonSwiperSlider('.home-property-slider-2', '.home-property-prev2', '.home-property-next2','.home-property-progress2');

    commonSwiperSlider('.home-property-slider-3', '.home-property-prev3', '.home-property-next3','.home-property-progress3');





    new Swiper('.home-developer-slider',{

        loop: false,

        speed: 500,

        grid:{

            rows: 2,

            fill: "row",

        },

        navigation: {

            prevEl: '.home-developer-prev',

            nextEl: '.home-developer-next',

        },

        pagination: {

            enabled: true,

            el: '.home-developer-progress',

            type: "fraction",

        },

        breakpoints: {

            0: {

                slidesPerView: 1.7,

                spaceBetween: 15,

                speed: 500,

            },

            541: {

                slidesPerView: 2.2,

                spaceBetween: 15,

                speed: 500,

            },

            861: {

                slidesPerView: 3,

                spaceBetween: 20,

                speed: 1000,

            },

            1153: {

                slidesPerView: 4,

                spaceBetween: 20,

                speed: 1000,

            }

        }

    });



    $('.home-location-slider').each(function (index, element) {

        new Swiper(element, {

            loop: false,

            speed: 500,

            navigation: {

                prevEl: $(element).siblings('.home-location-nav').find('.home-location-prev')[0],

                nextEl: $(element).siblings('.home-location-nav').find('.home-location-next')[0],

            },

            breakpoints: {

                0: {

                    slidesPerView: 1.3,

                    spaceBetween: 10,

                    speed: 500,

                },

                767: {

                    slidesPerView: 2,

                    spaceBetween: 10,

                    speed: 1000,

                },

                1153: {

                    slidesPerView: 3,

                    spaceBetween: 10,

                    speed: 1000,

                },

                1301: {

                    slidesPerView: 3,

                    spaceBetween: 20,

                    speed: 1000,

                }

            }

        });

    });

    



});







//custom selectbox



function niceSelect($) {

    $.fn.niceSelect = function(method) {

        function createNiceSelect(select) {

            select.after($("<div></div>").addClass("custom-select").addClass(select.attr("class")||"").addClass(select.attr("disabled")?"disabled":"").attr("tabindex",select.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));



            var niceSelect = select.next();

            var options = select.find('option');

            var selectedOption = select.find('option:selected');



            niceSelect.find('.current').html(selectedOption.data('display') || selectedOption.text());



            options.each(function() {

                var option = $(this);

                var display = option.data('display');



                niceSelect.find("ul").append($("<li></li>").attr("data-value",option.val()).attr("data-display",display||null).addClass("option"+(option.is(":selected")?" selected":"")+(option.is(":disabled")?" disabled":"")).html(option.text()));

            });

        }



        if (typeof method === 'string') {

            if (method === 'update') {

                return this.each(function() {

                    var select = $(this);

                    var niceSelect = $(this).next('.custom-select');

                    var isOpen = niceSelect.hasClass('open');



                    if (niceSelect.length) {

                        niceSelect.remove();

                        createNiceSelect(select);



                        if (isOpen) {

                            select.next().trigger('click');

                        }

                    }

                });

            } else if (method === 'destroy') {

                this.each(function() {

                    var select = $(this);

                    var niceSelect = $(this).next('.custom-select');



                    if (niceSelect.length) {

                        niceSelect.remove();

                        select.css('display', '');

                    }

                });



                if ($('.custom-select').length === 0) {

                    $(document).off('.nice_select');

                }



                return this;

            } else {

                console.log('Method "' + method + '" does not exist.');

            }



            return this;

        }



        this.hide();



        this.each(function() {

            var select = $(this);



            if (!select.next().hasClass('custom-select')) {

                createNiceSelect(select);

            }

        });



        $(document).off('.nice_select');



        $(document).on('click.nice_select', '.custom-select', function() {

            var niceSelect = $(this);



            $('.custom-select').not(niceSelect).removeClass('open');

            niceSelect.toggleClass('open');



            if (niceSelect.hasClass('open')) {

                niceSelect.find('.option');

                niceSelect.find('.focus').removeClass('focus');

                niceSelect.find('.selected').addClass('focus');

            } else {

                niceSelect.focus();

            }

        });



        $(document).on('click.nice_select', function(event) {

            if ($(event.target).closest('.custom-select').length === 0) {

                $('.custom-select').removeClass('open').find('.option');

            }

        });



        $(document).on('click.nice_select', '.custom-select .option:not(.disabled)', function() {

            var option = $(this);

            var niceSelect = option.closest('.custom-select');



            niceSelect.find('.selected').removeClass('selected');

            option.addClass('selected');



            var display = option.data('display') || option.text();

            niceSelect.find('.current').text(display);



            niceSelect.prev('select').val(option.data('value')).trigger('change');

        });



        var pointerEvents = document.createElement('a').style;

        pointerEvents.cssText = 'pointer-events:auto';



        if (pointerEvents.pointerEvents !== 'auto') {

            $('html').addClass('no-csspointerevents');

        }



        return this;

    };

}







