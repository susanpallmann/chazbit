$(document).ready(function() {
    $('.testimonials').each(function() {
        let slideNumber = $(this).find('.test-block-container').children('.test-block').length;
        console.log(slideNumber);
    });
});

$(document).on('click', '#hamburger' , function() {
    if ($(this).attr('aria-checked') === 'true') {
        $(this).attr('aria-checked', 'false');
        $('.tray').slideToggle();
        $('body').css('overflow', 'scroll');
    } else {
        $(this).attr('aria-checked', 'true');
        $('.tray').slideToggle();
        $('body').css('overflow', 'hidden');
    }
});
