



$(function () {
  $('.section').hide();
  $('.show').show();
  if ($('#com-1').is(':visible')) {
    $("#item-1").css({
      "outline": "#508CA4 4px solid",
      "background-color": "#508CA4",
      "color": "#FFF"
    });
  } else {
    $("#item-1").css({
      "outline": "#508CA4 0px solid",
      "background-color": "#FFF",
      "color": "#000"
    });
  };

  $('.secList').on('click', function () {
    $('.section').not($($(this).attr('href'))).hide();
    // フェードイン・アウトのアニメーション付で、表示・非表示を交互に実行する
    $($(this).attr('href')).fadeIn(800);
    //$($(this).attr('href')).show();
    //以下ゴミみたいなコード（要修正）
    if ($('#com-1').is(':visible')) {
      $("#item-1").css({
        "outline": "#508CA4 4px solid",
        "background-color": "#508CA4",
        "color": "#FFF"
      });
    } else {
      $("#item-1").css({
        "outline": "#508CA4 0px solid",
        "background-color": "#FFF",
        "color": "#000"
      });
    };
    if ($('#com-2').is(':visible')) {
      $("#item-2").css({
        "outline": "#508CA4 4px solid",
        "background-color": "#508CA4",
        "color": "#FFF"
      });
    } else {
      $("#item-2").css({
        "outline": "#508CA4 0px solid",
        "background-color": "#FFF",
        "color": "#000"
      });
    };
    if ($('#com-3').is(':visible')) {
      $("#item-3").css({
        "outline": "#508CA4 4px solid",
        "background-color": "#508CA4",
        "color": "#FFF"
      });
    } else {
      $("#item-3").css({
        "outline": "#508CA4 0px solid",
        "background-color": "#FFF",
        "color": "#000"
      });
    };
    if ($('#com-4').is(':visible')) {
      $("#item-4").css({
        "outline": "#508CA4 4px solid",
        "background-color": "#508CA4",
        "color": "#FFF"
      });
    } else {
      $("#item-4").css({
        "outline": "#508CA4 0px solid",
        "background-color": "#FFF",
        "color": "#000"
      });
    };
    if ($('#com-5').is(':visible')) {
      $("#item-5").css({
        "outline": "#508CA4 4px solid",
        "background-color": "#508CA4",
        "color": "#FFF"
      });
    } else {
      $("#item-5").css({
        "outline": "#508CA4 0px solid",
        "background-color": "#FFF",
        "color": "#000"
      });
    };
    if ($('#com-6').is(':visible')) {
      $("#item-6").css({
        "outline": "#508CA4 4px solid",
        "background-color": "#508CA4",
        "color": "#FFF"
      });
    } else {
      $("#item-6").css({
        "outline": "#508CA4 0px solid",
        "background-color": "#FFF",
        "color": "#000"
      });
    };
    if ($('#com-7').is(':visible')) {
      $("#item-7").css({
        "outline": "#508CA4 4px solid",
        "background-color": "#508CA4",
        "color": "#FFF"
      });
    } else {
      $("#item-7").css({
        "outline": "#508CA4 0px solid",
        "background-color": "#FFF",
        "color": "#000"
      });
    };
    if ($('#com-8').is(':visible')) {
      $("#item-8").css({
        "outline": "#508CA4 4px solid",
        "background-color": "#508CA4",
        "color": "#FFF"
      });
    } else {
      $("#item-8").css({
        "outline": "#508CA4 0px solid",
        "background-color": "#FFF",
        "color": "#000"
      });
    };
    if ($('#com-9').is(':visible')) {
      $("#item-9").css({
        "outline": "#508CA4 4px solid",
        "background-color": "#508CA4",
        "color": "#FFF"
      });
    } else {
      $("#item-9").css({
        "outline": "#508CA4 0px solid",
        "background-color": "#FFF",
        "color": "#000"
      });
    };
    if ($('#com-10').is(':visible')) {
      $("#item-10").css({
        "outline": "#508CA4 4px solid",
        "background-color": "#508CA4",
        "color": "#FFF"
      });
    } else {
      $("#item-10").css({
        "outline": "#508CA4 0px solid",
        "background-color": "#FFF",
        "color": "#000"
      });
    };
    if ($('#com-11').is(':visible')) {
      $("#item-11").css({
        "outline": "#508CA4 4px solid",
        "background-color": "#508CA4",
        "color": "#FFF"
      });
    } else {
      $("#item-11").css({
        "outline": "#508CA4 0px solid",
        "background-color": "#FFF",
        "color": "#000"
      });
    };
    if ($('#com-12').is(':visible')) {
      $("#item-12").css({
        "outline": "#508CA4 4px solid",
        "background-color": "#508CA4",
        "color": "#FFF"
      });
    } else {
      $("#item-12").css({
        "outline": "#508CA4 0px solid",
        "background-color": "#FFF",
        "color": "#000"
      });
    };
    if ($('#com-13').is(':visible')) {
      $("#item-13").css({
        "outline": "#508CA4 4px solid",
        "background-color": "#508CA4",
        "color": "#FFF"
      });
    } else {
      $("#item-13").css({
        "outline": "#508CA4 0px solid",
        "background-color": "#FFF",
        "color": "#000"
      });
    };
  });
});
