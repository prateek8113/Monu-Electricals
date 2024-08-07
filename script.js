
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const list = document.querySelector('.list')
const image = document.querySelectorAll('.image')
let counter = 1;


next.addEventListener('click',() =>{
    if(counter<image.length){list.style.transform =`translateX(-${counter*1000}px)`;
    counter++;}
    else{
        list.style.transform =`translateX(0px)`;
    counter=1;
    }
    
});
prev.addEventListener('click',() =>{
    if(counter<=image.length){list.style.transform =`translateX(-${(counter-1)*1000}px)`;
    counter--;
    };
   
    
});




const for1 = document.querySelector('.for');
const back = document.querySelector('.back');
const slider = document.querySelector('.imageslider')
const photo = document.querySelectorAll('.photo')
let clock = 1;


for1.addEventListener('click',() =>{
    if(clock<=5){slider.style.transform =`translateX(-${clock*200}px)`;
    clock++;}
    else{
        list.style.transform =`translateX(-${1*200}px)`;
    clock=1;
    }
    
});
back.addEventListener('click',() =>{
    if(clock<=6){slider.style.transform =`translateX(-${(clock-1)*200}px)`;
    clock--;
    };
   
    
});
 document.querySelector('.abt').addEventListener("click", function() {
 document.querySelector('.aboutuspage').scrollIntoView({ behavior: 'smooth' })});

 document.querySelector('.con').addEventListener("click", function() {
    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' })});
 

