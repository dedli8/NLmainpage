$(function () {
    $('.banner-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        dotsClass: 'banner-dots'
    });

    function dotsLeftPosition() {
        if ($(window).width() > 1336) {
            const dotsLeftPosition = ($(window).width() - 1336) / 2 + "px";
            console.log(dotsLeftPosition);
            $('.banner-dots').css("left", dotsLeftPosition);
        }
        else {
            $('.banner-dots').css("left", "2%");
        }
    }

    dotsLeftPosition();
    $(window).resize(function () {
        dotsLeftPosition();
    });
    $(".second-catalog .menu .menu-item").click(function (e) {
        $(".menu-item-active").removeClass("menu-item-active");
        $(e.target).addClass("menu-item-active");
        const clickedMenuItem = $(e.target).attr("data-attribute");
        $(".second-catalog .info .info-item-wrap").removeClass("info-item-wrap-active");
        const currentInfoItem = $(".second-catalog .info div#" + clickedMenuItem);
        currentInfoItem.addClass("info-item-wrap-active");
    });

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