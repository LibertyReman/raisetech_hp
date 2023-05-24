jQuery( function( $ ) {
    $('.menu li').hover(
        // 要素にマウスを載せたときの処理
        function () {
            $(this).find('.sub-menu li').hide().slideDown('fast');
        },
    );
} );


