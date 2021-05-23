// アニメーション
$(function () {
    // 端末判定
    // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    const ua = navigator.userAgent;
    let deviceFlg = 0;
    if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) {
        // スマートフォン向けの記述
        deviceFlg = 0;
    } else if (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        // タブレット向けの記述
        deviceFlg = 1;
    } else {
        // PC向けの記述
        deviceFlg = 3;
    }
    // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

    // 画面に入ってすぐのアニメーション
    // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    if(deviceFlg == 3){
        $('.alcohol_introduction_area').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    }
    else{
        $('.alcohol_introduction_area_media').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    }
    
    // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.fadein,.fadein2').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});