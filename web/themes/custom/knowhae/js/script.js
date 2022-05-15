(function ($, Drupal) {
    $('.knowhae-english-lang').click(function(){
        if($('.knowhae-languageswitcher-menu').hasClass('hidden')){
            $('.knowhae-languageswitcher-menu').removeClass('hidden');
        }else{
            $('.knowhae-languageswitcher-menu').addClass('hidden');
        }
        
    });
    $('.knowhae-languageswitcher-menu').addClass('hidden');
    $('.knowhae-languageswitcher-menu > section.language-switcher-language-url > ul.links > li.is-active').addClass('hidden');
    var $active_lang = $('.knowhae-languageswitcher-menu > section.language-switcher-language-url > ul.links').find('li.is-active > a').text();
    $('.knowhae-english-lang').html($active_lang);

    // next page popup alter
    var nextpage = $('.views-field-field-next-page span').text();
    
    if(nextpage == 'Managing HAE' || nextpage == 'HAE behandeln' || nextpage == 'Prise en charge de l’AOH' || nextpage == 'Manejo del AEH' || nextpage == 'Контроль НАО' || nextpage == 'Administrando o AEH' || nextpage == '管理 HAE')
     {$('.views-field-field-next-page ').addClass('open-managing-hae-popup')}

    if(nextpage == 'Identifying HAE' || nextpage == 'Das hereditäre Angioödem (HAE) diagnostizieren' || nextpage == 'Identificación del AEH' || nextpage == 'identification de l’AOH' || nextpage == 'Identificando o AEH' || nextpage == 'Определение НАО' || nextpage == '識別 HAE')
     {$('.views-field-field-next-page ').addClass('open-identifying-hae-popup')}

    $('.mobile-hamber-class').click(function(){
        $(this).toggleClass("is-active");
        $('.knowhae-nav-menus').toggleClass('is-active');
        $('.knowhae-utility-social-lang-menus').toggleClass('is-active');
        $('.region.region-navigation').toggleClass("is-active");
        $('header').toggleClass("is-active");
});

// stricky menu-------------//
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop + 100;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

})(jQuery, Drupal);