$(window).ready( function() {

var aLangKeys=new Array();
aLangKeys['en']=new Array();
aLangKeys['ru']=new Array();
aLangKeys['tr']=new Array();

aLangKeys['en']['order_button']=' Order food';
aLangKeys['en']['menu']='Menu';
aLangKeys['en']['breakfast']='Breakfast';

aLangKeys['ru']['order_button']=' Доставка';
aLangKeys['ru']['menu']='Меню';
aLangKeys['ru']['breakfast']='Завтрак';

aLangKeys['tr']['order_button']=' Sipariş';
aLangKeys['tr']['menu']='Menü';
aLangKeys['tr']['breakfast']='Kahvaltı';

// onclick behavior
$(".lang").click( function() {
    var lang = $(this).attr("id"); // obtain language id

    // translate all translatable elements
    $(".tr").each(function(i){
      $(this).text(aLangKeys[lang][ $(this).attr("key") ]);
    });
    if (lang === "tr") {
    	$("#tr").addClass("hidden");
    	$("#tr-pipe").addClass("hidden");
    	$("#en").removeClass("hidden");
    	$("#en-pipe").removeClass("hidden");
    	$("#ru").removeClass("hidden");
    }
    if (lang === "ru")  {
    	$("#ru").addClass("hidden");
    	$("#tr").removeClass("hidden");
    	$("#tr-pipe").addClass("hidden");
    	$("#en").removeClass("hidden");
    	$("#en-pipe").removeClass("hidden");
    }
    if (lang === "en")  {
    	$("#en").addClass("hidden");
    	$("#tr").removeClass("hidden");
    	$("#tr-pipe").removeClass("hidden");
    	$("#ru").removeClass("hidden");
    	$("#en-pipe").addClass("hidden");
    }
});
});