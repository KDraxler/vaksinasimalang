window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    
    let itung = document.getElementsByClassName("tc3");
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").style.boxShadow = "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px";
    }
    else {
        document.getElementById("navbar").style.boxShadow = "none";
    }
}

function ngitung(d,t){
    $(".num").counterUp({delay:d, time:t})
    
}

$(document).ready(function(){
    ngitung(10,300);
});


