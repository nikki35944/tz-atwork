// Настройки слайдера
$('.portfolio-slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
});



//Попап с работами
$('.portfolio-slider').magnificPopup({
    delegate: 'a',
    type: 'image',
    // tLoading: 'Загрузка #%curr%...',
    preloader: false,
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },

    image: {
        tError: '<a href="%url%">Изображение #%curr%</a> не может быть загружено.',
        markup: '<div class="mfp-figure">'+
            '<div class="mfp-close"></div>'+
            '<div class="mfp-counter"></div>'+
            '<div class="mfp-img"></div>'+
            '<div class="mfp-bottom-bar">'+
            '<div class="mfp-title"></div>'+
            '</div>'+
            '</div>',
        titleSrc: function(item) {
        return '<p class="mfp-title-header">'+ item.el.attr('title') +              '</p>' +
                '<p class="mfp-title-desc">'+ item.el.attr('description') + '</p>' +
                '<p class="mfp-title-price">'+ item.el.attr('price') + '<span class="currency">&#8381;</span>' + '</p>';

        }
    },
    callbacks: {
        resize: changeImgSize,
        imageLoadComplete:changeImgSize,
        change:changeImgSize,
        open: function () {
            $('.mfp-arrow-left').append('<img src="img/icons/back.png">');
            $('.mfp-arrow-right').append('<img src="img/icons/next.png">');
        },
    }

});
function changeImgSize(){
    var img = this.content.find('img.mfp-img');
    img.css('max-height', '340px');
    img.css('width', '100%');
    img.css('max-width', 'auto');
}

// Поделиться вакансией
$('.share-vacancy-collapse li a').click(function () {
    $('.share-vacancy-collapse').removeClass('show');
    let htmlString = '<span>Приграшение отправлено</span>';
    $('.share-vacancy-btn').addClass('sent-saved').html(htmlString);
});
// Добавление в избранное
$('.share-vacancy .btn-like').click(function () {
    if ( $(this).hasClass('liked')) {
        $('.share-vacancy .btn-like svg path').css({
            'fill': 'none',
            'stroke': '#606483',
        });
        $(this).removeClass('liked');
    } else {
        $('.share-vacancy .btn-like svg path').css({
            'fill': '#EF1C31',
            'stroke': '#EF1C31',
        });
        $(this).addClass('liked');
    }
});

// Прилипающий хедер мобильные устройства
if ($(window).width() < 768) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 ) {
            $('nav#navbar_top').show(500);
        } else {
            $('nav#navbar_top').hide(500);
        }
    });
} else {
    $('nav#navbar_top').css('display', 'none');
}
