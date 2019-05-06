var interval;
function startTicker(){
    $("#news li:first").slideUp(function(){
        $(this).appendTo($("#news")).slideDown();
    });
}
function stopTicker(){
    clearInterval(interval);
}
$(document).ready(function(){
    interval=setInterval(startTicker,2000);
    $("#news").hover(function(){
        stopTicker();
    },function(){
        interval=setInterval(startTicker,2000);
    });
});
