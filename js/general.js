// var count = 0
// $('body').click(
//     function(){
//     if(localStorage.music_time==undefined){
//         localStorage.music_time=0;
//     }
//     if(count==0 || localStorage.music_time==218){
//         $('audio')[0].currentTime = localStorage.music_time
//         $('audio')[0].play()
//         count++
//     }
//     vid = document.getElementsByTagName("audio")[0];
//     localStorage.music_time = vid.currentTime;
// });
$('#contactE').hover(function (){                        
    $('#email').show();                                           
});
$('#contactE').mouseleave(function (){                        
    $('#email').hide();                                           
});
$('#contactL').hover(function (){                        
    $('#linkedin').show();                                           
});
$('#contactL').mouseleave(function (){                        
    $('#linkedin').hide();                                           
});
$('#contactG').hover(function (){                        
    $('#github').show();                                           
});
$('#contactG').mouseleave(function (){                        
    $('#github').hide();                                           
});
$('#contactI').hover(function (){                        
    $('#ins').show();                                           
});
$('#contactI').mouseleave(function (){                        
    $('#ins').hide();                                           
});
$('body').keypress(function(e){
    if(e.key === ' '|| e.key === 'Spacebar'){
        if($('audio')[0].paused){
            $('audio')[0].play();
        }else{
            $('audio')[0].pause();
        }
        
    }
});
