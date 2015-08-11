var aLangKeys=new Array();
aLangKeys['en']=new Array();
aLangKeys['ru']=new Array();
aLangKeys['tr']=new Array();

aLangKeys['en']['order_button']='Order food';
aLangKeys['en']['peoples']='Peoples >>';
aLangKeys['en']['all_list']='All list';
aLangKeys['en']['online']='Online';
aLangKeys['en']['articles']='Articles >>';
aLangKeys['en']['js']='JavaScript';
aLangKeys['en']['php']='PHP';
aLangKeys['en']['html']='HTML';
aLangKeys['en']['css']='CSS';
aLangKeys['en']['contact_us']='Contact us';
aLangKeys['en']['welcome']='Welcome guests';

aLangKeys['ru']['order_button']=' Доставка';
aLangKeys['ru']['peoples']='Пользователи >>';
aLangKeys['ru']['all_list']='Весь список';
aLangKeys['ru']['online']='В сети';
aLangKeys['ru']['articles']='Статьи >>';
aLangKeys['ru']['js']='Яваскрипт';
aLangKeys['ru']['php']='ПХП';
aLangKeys['ru']['html']='ХТМЛ';
aLangKeys['ru']['css']='КСС';
aLangKeys['ru']['contact_us']='Напишите нам';
aLangKeys['ru']['welcome']='Добро пожаловать';

aLangKeys['tr']['order_button']='&nbsp;Sipariş';


$(document).ready(function() {

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