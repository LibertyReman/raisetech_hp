jQuery( function( $ ) {
	$( ".js-hamburger" ).on( "click", function() {
        if ($(this).hasClass("is-open")) {
            $( this ).removeClass( "is-open" );
            $( ".menu" ).removeClass( "is-open" );
        } else {
            $( this ).addClass( "is-open" );
            $( ".menu" ).addClass( "is-open" );
            $( ".menu > li" ).hide().slideDown('fast');
        }
    } );
} );
