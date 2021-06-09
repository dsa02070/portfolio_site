$(function () {

    //top button
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('.top_btn').addClass('on');
        } else {
            $('.top_btn').removeClass('on');
        }
    });

    //mgnb click event
    $('.mgnb_btn').click(function () {
        $('#gnb').toggleClass('on');
        // mobile btn span event 
        $('.mgnb_btn a span:nth-child(1)').toggleClass('first_bar');
        $('.mgnb_btn a span:nth-child(2)').toggleClass('opacity_zero');
        $('.mgnb_btn a span:nth-child(3)').toggleClass('last_bar');
    })

    // top_btn, menu click event
    $(".top_btn a, #gnb ul li a").click(function () {
        let thisElem = $(this.hash);
        let offsetElem = thisElem.offset();
        $("html,body").stop();
        $("html,body").animate({
            scrollTop: offsetElem.top
        }, 500);
    });

    // slick slider
    $('.portpolio_content').slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        customPaging: function (slider, i) {
            return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '</button>';
        },
    });
})