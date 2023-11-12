$(document).ready(function() {
    // $('.nav-link').click(function() {
    //     $(this).toggleClass('active');
    //     e.preventDefault();
    // });
});

$(function($) {
    let url = window.location.href;
    $('.navbar-nav li a').each(function() {
        if (this.href === url) {
            $(this).addClass('active');
        }
    });
});