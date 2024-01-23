document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button_sports').addEventListener('click', function () {
        document.getElementById('elementA').classList.add('club-active-sports');
        document.getElementById('elementB').classList.remove('club-active-culture');
        $('.section-sports').show();
        $('.section-culture').hide();
    });

    document.getElementById('button_culture').addEventListener('click', function () {
        document.getElementById('elementB').classList.add('club-active-culture');
        document.getElementById('elementA').classList.remove('club-active-sports');
        $('.section-sports').hide();
        $('.section-culture').show();
    });
});
/*------------------------------------------------------*/
$('.slider').slick({
    speed:200,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
    asNavFor: ".slider_other",
});

$('.slider_other').slick({
    fade:true,
    speed:200,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: false,//左右の矢印あり
    dots: false,//下部ドットナビゲーションの表示
    asNavFor: ".slider",
});
$('.openModal_club_culture1').click(function() {
    slider.slick('setPosition');
 });
/*--------------------モーダルslick--------------------------*/
$('.slider').slick('setPosition');
$('.slider_other').slick('setPosition');
$(function () {
    $('.bg-close').click(function () {
        $('#fixed_club_sports').fadeOut();
        $('#fixed_club_culture').fadeOut();
    });
});
$(function () {
    for (let i = 1; i <= 50; i++) {
        $(`#openModal_club_sports${i}`).click(function () {
            $('#fixed_club_sports').fadeIn();
            $('.slider_other').slick('slickGoTo', i-1, true);
            $('.slider').slick('setPosition');
            $('.slider_other').slick('setPosition');
        });
    }
});
$(function () {
    for (let i = 1; i <= 50; i++) {
        $(`#openModal_club_culture${i}`).click(function () {
            $('#fixed_club_culture').fadeIn();
            $('.slider_other').slick('slickGoTo', i-1, true);
            $('.slider').slick('setPosition');
            $('.slider_other').slick('setPosition');
        });
    }
});
/*---------------------------任意の部活に飛ぶ（ゴミ）要修正------------------------------*/
$(document).ready(function() {
    var club = getParameterByName('name');
    if (club === 'ekiden') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 0, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'track_and_field') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 1, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'baseball') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 2, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'basketball_m') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 3, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'basketball_w') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 4, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'judo') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 5, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'kendo') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 6, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'skate') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 7, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'golf') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 8, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'soccer_w') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 9, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'baseball_w') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 10, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'kyudo') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 11, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'volleyball_w') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 12, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'hard_tennis') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 13, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'table_tennis') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 14, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'soccer_m') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 15, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'swimming') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 16, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'soft_baseball') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 17, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
    } else if (club === 'sports') {
        $('#fixed_club_sports').fadeIn();
        $('.slider_other').slick('slickGoTo', 18, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');

    } else if (club === 'brass_band') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 0, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'calligraphy') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 1, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'kado') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 2, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'tea_ceremony') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 3, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'photo') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 4, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'science') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 5, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'go_and_shogi') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 6, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'art') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 7, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'english_conversation') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 8, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'interact') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 9, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'quiz') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 10, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'orchestra') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 11, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'dance') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 12, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'cheerleader') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 13, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'chorus') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 14, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    } else if (club === 'guitar') {
        $('#fixed_club_culture').fadeIn();
        $('.slider_other').slick('slickGoTo', 15, true);
        $('.slider').slick('setPosition');
        $('.slider_other').slick('setPosition');
        $(".switch-to-sports").removeClass("club-active-sports");
        $(".switch-to-culture").addClass("club-active-culture");
    }
    var element = $(".switch-to-sports");
    if (element.hasClass("club-active-sports")) {
		//activeクラスが付与されている場合
        $('.section-sports').show();
        $('.section-culture').hide();
	} else {
        $('.section-sports').hide();
        $('.section-culture').show();
	}
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}