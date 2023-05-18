jQuery( function( $ ) {
	$( ".js-hamburger" ).on( "click", function() {
		$( this ).toggleClass( "is-open" );
		$( ".menu" ).toggleClass( "is-open" );
	} );
} );
