$(function () {
    //count left position of dots depending of devise width
    function dotsLeftPosition(dotsClass, maxWidth) {
        if ($(window).width() > maxWidth) {
            const dotsLeftPosition = ($(window).width() - maxWidth) / 2 + "px";
            console.log(dotsLeftPosition);
            dotsClass.css("left", dotsLeftPosition);
        }
        else {
            dotsClass.css("left", "2%");
        }
    }

    //languge panel
    $('.language-panel-item').click(function (e) {
        $('.language-panel-item').removeClass('language-panel-item-active');
        $(e.target).addClass('language-panel-item-active');
    });

    //init main banner slider
    $('.banner-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        dotsClass: 'banner-dots'
    });
    dotsLeftPosition($('.banner-dots'), 1336);
    $(window).resize(function () {
        dotsLeftPosition($('.banner-dots'));
    });

    //second catalog slider
    $('.second-catalog-slider').slick({
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: false,
        arrows: true,
        prevArrow: '<div type="button" class="second-catalog-slick-prev"></div>',
        nextArrow: '<div type="button" class="second-catalog-slick-next"></div>',
        // responsive: [
        //     {
        //         breakpoint: 940,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     }
        // ]
    });


    // tabs
    function tabs(menuItem, catalogSliderItemActive) {
        menuItem.click(function (e) {
            // console.log(slickCurrentSlide());
            $("." + catalogSliderItemActive).removeClass(catalogSliderItemActive);
            $(e.target).parent().addClass(catalogSliderItemActive);
            // console.log((menuItem.length-1)/2);
            // if (dataSlickIndex==0){
            //     console.log("Yes");
            // }
            // while(dataSlickIndex!="0"){
            $('.second-catalog-slider').slick("slickNext");
            let dataSlickIndex = $(e.target).parent(".catalog-slider-item").attr('tabindex');
                $('.second-catalog-slick-next').click( function () {
                    dataSlickIndex = $(e.target).parent(".catalog-slider-item").attr('tabindex');
                    console.log(dataSlickIndex);
                });
            const dataIndex = $(e.target).parent(".catalog-slider-item").attr('data-index');
            console.log(dataIndex);
            console.log($('.second-catalog-slider').slick('slickCurrentSlide'));
            // $('.second-catalog-slider').slick('slickGoTo', 3);
                // dataSlickIndex = $(e.target).parent(".catalog-slider-item").attr('tabindex');
                // console.log(dataSlickIndex);
                // console.log(dataSlickIndex);
            // }
        });
    }
    tabs($(".second-catalog .menu-item"), "catalog-slider-item-active");

    //init stock and news slider
    $('.stock-news-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        autoplay: true,
        prevArrow: '<div type="button" class="stock-slick-prev"></div>',
        nextArrow: '<div type="button" class="stock-slick-next"></div>',
        arrows: true,
        responsive: [
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    //stock news panel toggle
    $(".stock-news-toggle-panel").click(function (e) {
        if ($(e.target).hasClass("toggle-item-active")) {
            return
        } else {
            $(this).children().removeClass("toggle-item-active");
            $(e.target).addClass("toggle-item-active");
            if ($(e.target).attr("id") == "stock-toggle") {
                $("#news-slider").hide();
                $("#stock-slider").show();
            } else if ($(e.target).attr("id") == "news-toggle") {
                $("#stock-slider").hide();
                $("#news-slider").show();
            }
        }
    });

//bottom slider init
    $('.bottom-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        prevArrow: '<div type="button" class="bottom-slider-prev"></div>',
        nextArrow: '<div type="button" class="bottom-slider-next"></div>',
        arrows: true
    });

//dropdown catalog menu
$('#dropdown-catalog-toggle').mouseover(function () {
    $('#dropdown-catalog').css({"display": "block"});
});
$('#dropdown-catalog').mouseleave(function () {
    $('#dropdown-catalog').css("display", "none");
    $('.dropdown-inner-menu').removeClass('dropdown-catalog-active-ib');
    $('.dropdown-catalog-wrap').css({"width": "34%", 'display':'block'});
    $('.dropdown-menu-wrap').css({'width':'100%', 'display':'block'});
    $('.grid').masonry('destroy');
});
$('.dropdown-menu-item a').mouseover(function (e) {
    $('.dropdown-inner-menu').removeClass('dropdown-catalog-active-ib');
    const currentDdItem = $(e.target).attr("data-attribute");
    $('div#' + currentDdItem).addClass("dropdown-catalog-active-ib");
    $('.dropdown-catalog-wrap').css({"width": "100%"});
    $('.dropdown-menu-wrap').css({'width':'34%', 'display':'inline-block'});
    $('.dropdown-connector').css({'width': "18%"});
    $('.inner-menu').masonry({
        // options
        itemSelector: '.inner-menu-item',
        columnWidth: 197,
        transitionDuration: '0.5s'
    });
});

});