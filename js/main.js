//右上のメニュー
function noscroll(e) {
  e.preventDefault();
}
$(".openbtn").click(function () {
  //ボタンがクリックされたら
  var element = $("#g-nav");
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
  if (element.hasClass("panelactive")) {
    //activeクラスが付与されている場合
    document.addEventListener("touchmove", noscroll, { passive: false });
    document.addEventListener("wheel", noscroll, { passive: false });
  } else {
    //activeクラスが付与されていない場合
    document.removeEventListener("touchmove", noscroll);
    document.removeEventListener("wheel", noscroll);
  }
});

$("#g-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $("body").css({ overflow: "auto" });
  $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
});

$(".closebg").click(function () {
  //ナビゲーションのリンクがクリックされたら
  var element = $("#g-nav");
  $("body").css({ overflow: "auto" });
  $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
  if (element.hasClass("panelactive")) {
    //activeクラスが付与されている場合
    document.addEventListener("touchmove", noscroll, { passive: false });
    document.addEventListener("wheel", noscroll, { passive: false });
  } else {
    //activeクラスが付与されていない場合
    document.removeEventListener("touchmove", noscroll);
    document.removeEventListener("wheel", noscroll);
  }
});

//画像のドラッグ拒否
$(function () {
  $("img").on("contextmenu oncopy", function () {
    return false;
  });
  $("img").on("dragstart", function (e) {
    e.stopPropagation();
    e.preventDefault();
  });
});

//部活動セクション
/*--------------任意の部活動へ飛ぶリンク-------------------------*/
function changeClub(club_name) {
	window.location.href = "/club/club.html?name=" + club_name;
}
/*-----------任意のタブにURLからリンクするための設定---------------*/
function GethashID(hashIDName) {
  if (hashIDName) {
    //タブ設定
    $(".tab li")
      .find("a")
      .each(function () {
        //タブ内のaタグ全てを取得
        var idName = $(this).attr("href"); //タブ内のaタグのリンク名（例）#lunchの値を取得
        if (idName == hashIDName) {
          //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
          var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
          $(".tab li").removeClass("active"); //タブ内のliについているactiveクラスを取り除き
          $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
          //表示させるエリア設定
          $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
          $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
        }
      });
  }
}

//タブをクリックしたら
$(".tab a").on("click", function () {
  var idName = $(this).attr("href"); //タブ内のリンク名を取得
  GethashID(idName); //設定したタブの読み込みと
  return false; //aタグを無効にする
});

// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on("load", function () {
  $(".tab li:first-of-type").addClass("active"); //最初のliにactiveクラスを追加
  $(".area:first-of-type").addClass("is-active"); //最初の.areaにis-activeクラスを追加
  var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
  GethashID(hashName); //設定したタブの読み込み
});
/*--------------------------------------------------------------------*/
//部活動セクション終わり
$(function () {
  $(".sns_slider").slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 5000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    slidesToShow: 3, //表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, //画面幅750px以下でスライド3枚表示
        },
      },
    ],
  });
});

$("#main-slider").slick({
  //ここにオプション
  draggable: true, //ドラッグでのスライド禁止
  autoplay: true,
  //autoplay:false,          //自動再生
  slidesToShow: 3, //スライドを画面に3枚見せる
  slidesToScroll: 3, //1回のスクロールで3枚の写真を移動して見せる
  dots: true, //下部ドットナビゲーションの表示
  autoplaySpeed: 4000,
  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
});
