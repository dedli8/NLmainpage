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

    //tabs
    function tabs(menuItem, menuItemActiveClass, infoItem, infoItemActiveClass) {
        menuItem.click(function (e) {
            $("."+menuItemActiveClass).removeClass(menuItemActiveClass);
            $(e.target).addClass(menuItemActiveClass);
            const clickedMenuItem = $(e.target).attr("data-attribute");
            infoItem.removeClass(infoItemActiveClass);
            const currentInfoItem = $(".second-catalog .info div#" + clickedMenuItem);
            currentInfoItem.addClass(infoItemActiveClass);
        });
    }
    tabs($(".second-catalog .menu .menu-item"), "menu-item-active", $(".second-catalog .info .info-item-wrap"), "info-item-wrap-active");

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
if($(e.target).hasClass("toggle-item-active")){
return
}else{
    $(this).children().removeClass("toggle-item-active");
    $(e.target).addClass("toggle-item-active");
    if($(e.target).attr("id") == "stock-toggle"){
        $("#news-slider").hide();
        $("#stock-slider").show();
    } else if($(e.target).attr("id") == "news-toggle"){
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
});