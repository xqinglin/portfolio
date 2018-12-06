count = 0;
$('body').click(
    function(){
    if(count==0 || localStorage.music_time==218){
        $('audio')[0].currentTime = localStorage.music_time
        $('audio')[0].play()
        count++
    }
    vid = document.getElementsByTagName("audio")[0];
    localStorage.music_time = vid.currentTime;
});
$('a').click(
    function time_music(){
    vid = document.getElementsByTagName("audio")[0];
    localStorage.music_time = vid.currentTime;
    }
)