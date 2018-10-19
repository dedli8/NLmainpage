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
    function dotsLeftPosition () {
        if ($(window).width() > 1336){
        const dotsLeftPosition = ($(window).width()-1336)/2+"px";
        console.log(dotsLeftPosition);
        $('.banner-dots').css("left", dotsLeftPosition);
        }
        else{
            $('.banner-dots').css("left", "2%");
        }
    }
    dotsLeftPosition();
    $(window).resize(function () {
        dotsLeftPosition();
    })
});