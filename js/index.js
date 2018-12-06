$('#contactE1').click(function (){                        
    $('#email1').slideToggle('slow');                                           
});
$('#contactL1').click(function (){                        
    $('#linkedin1').slideToggle('slow');                                           
});
$('#contactG1').click(function (){                        
    $('#github1').slideToggle('slow');                                           
});
$('#contactI1').click(function (){                        
    $('#ins1').slideToggle('slow');                                           
});
function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
}
$('#wolverine').hover(function(){
    $('#wolverine').removeClass().addClass('animated infinite tada delay-0s');
    $('#roar').show();
});
$('#wolverine').mouseleave(function(){
    $('#wolverine').removeClass();
    $('#roar').hide();
});