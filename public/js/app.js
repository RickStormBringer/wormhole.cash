var scrollToCon = function (ele) {
    $('#' + ele).get(0).scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
};

$(document).ready(function () {

    // scroll to about
    $('.link-about').click(function () {
        scrollToCon('about')
    });

    // scroll to futures
    $('.link-futures').click(function () {
        scrollToCon('futures')
    });


    //toogle languages
    $('.choose-language').click(function () {
        $('.language-options').show()
    }).mouseleave(function () {
        $('.language-options').hide()
    })

    //toogle downloads
    $('.choose-download').click(function () {
        $('.download-options').show()
    }).mouseleave(function () {
        $('.download-options').hide()
    })

    // choose languages
    $('.js-option').click(function (e) {
        var text = $(this).text()
        e.stopPropagation() //stop propagation
        $('.choose-language a').text(text)
        $('.language-options').hide()
        var language = $(this).data('lan')
        window.location.href = '/' + language;
        Cookies.set('whc_lang', language)
    })

    // toogle moblie nav
    $('#toogle-nav').click(function () {
        $('#moblie-navbar').toggleClass('moblie-nav-box')
        if ($('#moblie-navbar').hasClass('moblie-nav-box')) {
            $('#moblie-navbar').animate({
                left: '-200px'
            }, "normal")
        } else {
            $('#moblie-navbar').animate({
                left: '0px'
            }, "normal")
        }
    })
    var icon_wechat = document.getElementById('icon_wechat');
    icon_wechat.onmouseover = function() {
        document.getElementById('popup').style.display = 'block';
    }
    icon_wechat.onmouseout = function() {
        document.getElementById('popup').style.display = 'none';
    }
    var icon_k = document.getElementById('icon_k');
    icon_k.onmouseover = function() {
        document.getElementById('popup_k').style.display = 'block';
    }
    icon_k.onmouseout = function() {
        document.getElementById('popup_k').style.display = 'none';
    }
})