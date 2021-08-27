const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .nav-items .menu ul li');


window.addEventListener('scroll', ()=> {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        console.log(sectionHeight)
        
        if(pageYOffset >= (sectionTop - sectionHeight / 1.85)){
            current = section.getAttribute('id');
        }
    })

    navLi.forEach( li =>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})

window.onscroll = function() {scrollFunction()};

$(document).ready(function(){
    ngitung(10,300);
});

// $(document).on('click', 'ul li', function(){
//     $(this).addClass('active').siblings().removeClass('active');
// })

function scrollFunction() {
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