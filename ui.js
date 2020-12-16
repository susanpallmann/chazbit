$(document).ready(function() {
    
});

$(document).on('click', '#hamburger' , function() {
    if ($(this).attr('aria-checked') === 'true') {
        $(this).attr('aria-checked', 'false');
        $('.tray').slideToggle();
    } else {
        $(this).attr('aria-checked', 'true');
        $('.tray').slideToggle();
    }
});
