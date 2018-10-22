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
        // $(".second-catalog .menu .menu-item-active .info-item-btn").css("display", "block");
        $(".menu-item-active").removeClass("menu-item-active");
        $(e.target).addClass("menu-item-active");
        const clickedMenuItem = $(e.target).attr("data-attribute");
        $(".second-catalog .info .info-item-wrap").removeClass("info-item-wrap-active");
        const currentInfoItem = $(".second-catalog .info div#" + clickedMenuItem);
        currentInfoItem.addClass("info-item-wrap-active");
        // currentInfoItem.find(".info-item-btn").css("display", "none");
    })
});