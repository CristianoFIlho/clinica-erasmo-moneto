$('.alert .close').click(function(e) {
    e.preventDefault();
    $(this).closest('.alert').slideUp();
});