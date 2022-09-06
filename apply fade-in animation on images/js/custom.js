jQuery(document).ready(function($){
    $(window).scroll(function() {
        $('h3 img').each(function(){
            if ($(this).is(":in-viewport")) {
                $(this).addClass("animated");
            }
        });
    });
});