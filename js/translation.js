$(window).ready( function() {

var aLangKeys=new Array();
aLangKeys['en']=new Array();
aLangKeys['ru']=new Array();
aLangKeys['tr']=new Array();

aLangKeys['en']['order_button']=' Order food';
aLangKeys['en']['menu']='Menu';
aLangKeys['en']['gallery']='Gallery';
aLangKeys['en']['social']='Social';
aLangKeys['en']['about']='About';
aLangKeys['en']['location']='Location';
aLangKeys['en']['food']='Food';
aLangKeys['en']['drinks']='Beverages';
aLangKeys['en']['breakfast']='Breakfast';
aLangKeys['en']['starters']='Starters';
aLangKeys['en']['maincourse']='Main course';
aLangKeys['en']['salads']='Salads';
aLangKeys['en']['burgers']='Burgers';
aLangKeys['en']['toasts']='Toasts';
aLangKeys['en']['omlets']='Omlets';
aLangKeys['en']['barbeque']='Barbeque';
aLangKeys['en']['wraps']='Wraps';
aLangKeys['en']['pastas']='Pastas';
aLangKeys['en']['pizzas']='Pizzas';
aLangKeys['en']['deserts']='Deserts';
aLangKeys['en']['cold-drinks']='Cold drinks';
aLangKeys['en']['hot-drinks']='Hot drinks';
aLangKeys['en']['liquor']='Liquor';
aLangKeys['en']['beer']='Beer';
aLangKeys['en']['wine']='Wine';
aLangKeys['en']['feed']='Our feed';
aLangKeys['en']['more']='more';

aLangKeys['ru']['order_button']=' Доставка';
aLangKeys['ru']['menu']='Меню';
aLangKeys['ru']['gallery']='Фотографии';
aLangKeys['ru']['social']='Соцсети';
aLangKeys['ru']['about']='О нас';
aLangKeys['ru']['location']='Где мы';
aLangKeys['ru']['food']='Блюда';
aLangKeys['ru']['drinks']='Напитки';
aLangKeys['ru']['breakfast']='Завтрак';
aLangKeys['ru']['starters']='Закуски';
aLangKeys['ru']['maincourse']='Основные';
aLangKeys['ru']['salads']='Салаты';
aLangKeys['ru']['burgers']='Бургеры';
aLangKeys['ru']['toasts']='Тосты';
aLangKeys['ru']['omlets']='Омлеты';
aLangKeys['ru']['barbeque']='Барбекю';
aLangKeys['ru']['wraps']='Лаваш с начинкой';
aLangKeys['ru']['pastas']='Макароны';
aLangKeys['ru']['pizzas']='Пицца';
aLangKeys['ru']['deserts']='Десерты';
aLangKeys['ru']['cold-drinks']='Холодные напитки';
aLangKeys['ru']['hot-drinks']='Горячие напитки';
aLangKeys['ru']['liquor']='Алкогольные напитки';
aLangKeys['ru']['beer']='Пиво';
aLangKeys['ru']['wine']='Вино';
aLangKeys['ru']['feed']='Наш инстаграм';
aLangKeys['ru']['more']='ещё';

aLangKeys['tr']['order_button']=' Sipariş';
aLangKeys['tr']['menu']='Menü';
aLangKeys['tr']['gallery']='Fotoğraflar';
aLangKeys['tr']['social']='Sosyal';
aLangKeys['tr']['about']='Hakkımızda';
aLangKeys['tr']['location']='İletişim';
aLangKeys['tr']['food']='Yemekler';
aLangKeys['tr']['drinks']='İçecekler';
aLangKeys['tr']['breakfast']='Kahvaltılar';
aLangKeys['tr']['starters']='Başlangıçlar';
aLangKeys['tr']['maincourse']='Ana yemekler';
aLangKeys['tr']['salads']='Salatalar';
aLangKeys['tr']['burgers']='Burgerler';
aLangKeys['tr']['toasts']='Tostlar';
aLangKeys['tr']['omlets']='Omletler';
aLangKeys['tr']['barbeque']='Izgaralar';
aLangKeys['tr']['wraps']='Dürümler';
aLangKeys['tr']['pastas']='Makarnalar';
aLangKeys['tr']['pizzas']='Pizzalar';
aLangKeys['tr']['deserts']='Tatlılar';
aLangKeys['tr']['cold-drinks']='Soğuk içecekler';
aLangKeys['tr']['hot-drinks']='Sıcak içecekler';
aLangKeys['tr']['liquor']='Alkollü içecekler';
aLangKeys['tr']['beer']='Biralar';
aLangKeys['tr']['wine']='Şaraplar';
aLangKeys['tr']['feed']='Bizim instagram';
aLangKeys['tr']['more']='daha';

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