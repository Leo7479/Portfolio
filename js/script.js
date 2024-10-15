var logoName = document.getElementById("logoHeading");
var tile = document.getElementsByClassName("tile")[0];
var r = document.querySelector(":root");
var rs = getComputedStyle(r);
var getIns = document.querySelectorAll(".animate");
var workcontainers = document.querySelectorAll(".workcontainer");
var upArrow = document.getElementsByClassName("upArrowContainer")[0];
var article1 = document.getElementById("personal-info");
var horizontalScrollCards = document.getElementsByClassName("cards horizontal")
var typewrittertext = document.getElementById("typewrittertext");


var loaderSpan = document.getElementsByClassName('loaderspan');
let jumpCounter = 0;
setInterval(()=>{
    loaderSpan[jumpCounter].classList.remove('jump');
    jumpCounter = (jumpCounter+1)%4;
    loaderSpan[jumpCounter].classList.add('jump');
},200);
window.addEventListener('load', ()=>{
    const splashDiv = document.getElementById('splash');
    splashDiv.style.display="none";
    animatable.forEach((a)=>{observer.observe(a)});
    registerButton.addEventListener("click", ()=>{
        window.open("https://forms.gle/a2F854fL54QmoMjh6", "_blank");
    });
})

const ob = new IntersectionObserver((entry)=>{
    entry.forEach((e)=>{
        if(e.isIntersecting){
            upArrow.style.visibility = 'hidden';
        }
        else{
            upArrow.style.visibility = 'visible';
        }
    })
    
});
ob.observe(article1);


// On Scroll Behaviours
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting)
            entry.target.classList.add("getUp");
        else
            entry.target.classList.remove("getUp");
    })
})
getIns.forEach((e)=>{observer.observe(e);});

horizontalScrollCards[0].addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        horizontalScrollCards[0].scrollLeft += evt.deltaY * 3;
})

const roles = ["Software Developer", "Front-End Developer", "AI Enthusiast","Shubhrajit Sarkar"];
let i = 0;

setTimeout(()=>{setInterval(()=>{
    typewrittertext.textContent = roles[i];
    i = (i + 1) % roles.length;
}, 4000)}, 1000);
