function appearanimation(){
    var lastSection = document.querySelector('.last-section');
    var position = lastSection.getBoundingClientRect().top;
    var screenpos = window.innerHeight/1.3;

    if(position < screenpos){
        lastSection.classList.add('appear-text');
    }
}

function scrollanimation(){
    var midSection = document.querySelector('.mid-section');
    var position1 = midSection.getBoundingClientRect().top;
    var screenpos1 = window.innerHeight/2.1;
   

    if(position1 < screenpos1){
        midSection.classList.add('appear-midSection');
    }
    
    
}

window.addEventListener('scroll', appearanimation);
window.addEventListener('scroll', scrollanimation);