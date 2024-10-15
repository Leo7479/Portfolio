// Variables Section

// var dayCheck = document.getElementById("day-mode-checkbox");
// var nightCheck = document.getElementById("night-mode-checkbox");
// var showhidemode = document.getElementById("showhidemode");
// var showhidemodelabel = document.getElementById("showhidemodelabel");
// var modemenu = document.getElementsByClassName("mode")[0];
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

// Logic Section
// showhidemode.addEventListener('click',()=>{
//     if(showhidemode.checked){
//         modemenu.classList.add("hide");
//         showhidemodelabel.textContent = "<";
//     }else{
//         modemenu.classList.remove("hide");
//         showhidemodelabel.textContent = ">";
//     }
// })
// dayCheck.addEventListener('click',()=>{
//     nightCheck.checked = false;
//     dayCheck.checked = true;
//     dayCheck.classList.add("active");
//     nightCheck.classList.remove("active");
//     r.style.setProperty("--highlight-color-1", "indigo");
//     r.style.setProperty("--background-color", "white");
//     r.style.setProperty("--overlay-color","rgb(161,150,255)");
//     document.body.style.color = "black";
// })
// nightCheck.addEventListener('click',()=>{
//     dayCheck.checked = false;
//     nightCheck.checked = true;
//     nightCheck.classList.add("active");
//     dayCheck.classList.remove("active");
//     r.style.setProperty("--highlight-color-1", "#bf68ff");
//     r.style.setProperty("--background-color", "#4b0082");
//     r.style.setProperty("--overlay-color","rgb(57,211,235)");
//     document.body.style.color = "white";
// })


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
