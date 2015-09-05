$(document).ready(function(){
    $('article#breakfast').load("breakfast.txt");
    setInterval(function(){
        $('article#breakfast').load("breakfast.txt");
    },1000);
});