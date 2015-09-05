jQuery(document).ready(function(){
    $("#nav-mobile").html($("#nav-main").html());
    $(".c-hamburger").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });
    $("nav#nav-mobile ul li").click(function(){
        $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
        $(".c-hamburger").removeClass("is-active");
    });
});