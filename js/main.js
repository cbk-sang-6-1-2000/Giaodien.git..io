$(document).ready(function() {
    if ($(window).width() < 740) { 
        $('#menu').hide(); 
        $('.main-menu').click(function (e) { 
            e.preventDefault();
            $('#menu').slideToggle();
        });
    }
});