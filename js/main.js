let ourSkillsSection = document.querySelector(".ourskills");
let allDivs = document.querySelectorAll(".progress div");

window.addEventListener("scroll" , function(e){
    if(this.scrollY >= ourSkillsSection.offsetTop){
        allDivs.forEach((div) => {
            div.style.width = div.getAttribute("data-width");
        })
    }
})




let awesomeSection = document.querySelector(".awesome");
let allH3 = document.querySelectorAll(".state h3")
let start = false;
window.addEventListener("scroll" , function(e){
    if(this.scrollY >= awesomeSection.offsetTop - 100){
        if(!start){
            allH3.forEach((h) => counter(h));
            start = true;
        }
    }
})

function counter(e){
    let goal = e.getAttribute("data-goal");
    let count = setInterval(() => {
        e.textContent++;
        if(e.textContent == e.getAttribute("data-goal")){
            clearInterval(count);
        }
    } , 2000 / goal)
}