$(function() {
    $('.slider').slick({
        infinite: true,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
                    ]
    });
});


$(function(){
    $("#slider").slick({
        prevArrow: '<img src="前への矢印画像のパス" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="次への矢印画像のパス" class="slide-arrow next-arrow">'
    });
});

