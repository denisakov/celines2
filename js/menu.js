jQuery("document").ready(function($){
    var nav = $('.nav-container');
    var pos = nav.offset().top;
    $(window).scroll(function () {
      var fix = ($(this).scrollTop() > pos) ? true : false;
      nav.toggleClass("fix-nav", fix);
      $('body').toggleClass("fix-body", fix);  
    });
});