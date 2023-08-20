$(function () {


  // ====================
  // ハンバーガーメニュー
  // ====================

  $(".toggle-btn").on("click", function () {
    ($("header").toggleClass("open"));
  });

  $(".mask").on("click", function () {
    $("header").removeClass("open");
  });

  $("#nav-menu a").on("click", function () {
    $("header").removeClass("open");
  });

  let toggle = $(".toggle-btn");

    if (window.matchMedia("(min-width: 961px)").matches) {
      toggle.hide();
      //画面横幅が961px以上のときの処理
      $(window).scroll(function () {
        if ($(this).scrollTop() > 750) {
          toggle.fadeIn();
        } else {
          toggle.fadeOut();
        }
      });
    }



  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 330) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });


  // ====================
  // トップに戻るボタン
  // ====================
  let pagetop = $(".top-btn");
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 750) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });

  // クリックイベント（ボタンがクリックされた際に実行）
  pagetop.click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0 }, 500);

    // イベントが親要素へ伝播しないための記述
    // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
    return false;
  });


  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function () {
    // リンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });





});
