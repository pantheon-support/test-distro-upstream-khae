(function ($, Drupal) {
    
    // resource page copy text
    $('button.copyButton').click(function(){
        $(this).siblings('input.link-to-copy').select();  
        document.execCommand("copy");
        $(this).children("span").text("Copied to Clipboard").delay(1500).fadeOut();
    });

    $(".copyButton").mouseover(function(){
		$(this).children(".myTooltip").show();
	});

    $(".copyButton").mouseout(function(){
		$(this).children("span").text("Copy to Clipboard");
		$(this).children(".myTooltip").hide();
	});
 
// cookies block js

$('.cookie-close-btn').click(function(){
  const d = new Date();
  d.setDate(d.getDate() + 1);
  var expireDate = d ? d.toGMTString() : "";
  document.cookie = "cookienotification=1;path=/;expires="+expireDate;
  
  if(getCookie('cookienotification') == 1){
    $('.cookies-block').hide('slow');
  }
});

var getCookie = (name) => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
      let c = cookies[i].trim().split('=');
      if (c[0] === name) {
          return c[1];
      }
  }
  return "";
}

if(getCookie('cookienotification') == 1){
  $('.cookies-block').addClass('hidden');
}else{
  if($('.cookies-block').hasClass('hidden')){
    $('.cookies-block').removeClass('hidden');
  }
}

})(jQuery, Drupal);