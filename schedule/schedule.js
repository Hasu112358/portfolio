const endOfMonth = (year, month) => {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
};

var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();

function changeDistance() {
    var eventHeight = 130 + 5;
    var distance = (currentMonth) * eventHeight + currentDay / endOfMonth(2023, currentMonth) * eventHeight;
    if ((currentMonth + 1) >= 4 && (currentMonth + 1) <= 12) {
        distance = distance - eventHeight*3
    } else {
        distance = distance + eventHeight*9
    }
    var text = document.getElementById("bar_js");
    text.style.top = Math.round(distance) + "px";
}

//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
/*
var access = $.cookie('access')
if(!access){
    flag = true;
    $.cookie('access', false);
}else{
    flag = false
}
*/
var flag = true;
//モーダル表示

/*
$(".modal-open").modaal({
    start_open: flag, // ページロード時に表示するか
    overlay_close: true,//モーダル背景クリック時に閉じるか
    before_open: function (e) {// モーダルが開く前に行う動作
        $('html').css('overflow-y', 'scroll');
    },
    after_close: function () {// モーダルが閉じた後に行う動作
        $('html').css('overflow-y', 'scroll');
        var element = document.getElementById("bar_js");
        // 画面の中心の位置を計算する
        var center = window.innerHeight / 2;
        // 特定のidを持つ要素の、ページ上部からの位置を取得する
        var position = element.offsetTop - center + 200;

        // スムーズなスクロール
        $("html, body").animate({ scrollTop: position }, 500, "swing");
    }
});
*/
/*なぜこれ動かない？？？？*/
/*うごいたわ*/
$(function () {
    for (let i = 1; i <= 50; i++) {
        $(`#openModal${i}`).click(function () {
            $(`#modalArea${i}`).fadeIn();
        });
        $(`#closeModal${i} , #modalBg${i}`).click(function () {
            $(`#modalArea${i}`).fadeOut();
        });
    }
});
$(function () {
    $('#openModal').click(function () {
        $('#modalArea').fadeIn();
    });
    $('#closeModal , #modalBg').click(function () {
        $('#modalArea').fadeOut();
    });
    $('#closeModalX').click(function () {
        $('#modalArea').fadeOut();
        var element = document.getElementById("bar_js");
        // 画面の中心の位置を計算する
        var center = window.innerHeight / 2;
        // 特定のidを持つ要素の、ページ上部からの位置を取得する
        var position = element.offsetTop - center + 200;

        // スムーズなスクロール
        $("html, body").animate({ scrollTop: position }, 500, "swing");
    });
});
