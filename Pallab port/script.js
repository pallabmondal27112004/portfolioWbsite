const skills = document.querySelector(".skills")
const experience = document.querySelector(".Experience")
const education = document.querySelector(".Education")
const skillsWork = document.querySelector(".about-wprk-skill")
const skillsExprience = document.querySelector(".about-wprk-experience")
const skillsEducation = document.querySelector(".about-wprk-education")
const body = document.querySelector('body')
const boxMenu = document.querySelector(".menu-icon");


// experience.style.color = "black"

skills.addEventListener("click", ()=>{
    skills.classList.add("active")
    experience.classList.remove("active")
    education.classList.remove("active")
    skillsWork.style.display = "block"
    skillsExprience.style.display = "none"
    skillsEducation.style.display = "none"



})

experience.addEventListener("click", ()=>{
    experience.classList.add("active")
    skills.classList.remove("active")
    education.classList.remove("active")
    skillsExprience.style.display = "block"
    skillsWork.style.display = "none"
    skillsEducation.style.display = "none"


})
education.addEventListener("click", ()=>{
    education.classList.add("active")
    experience.classList.remove("active")
    skills.classList.remove("active")
    skillsEducation.style.display = "block"
    skillsWork.style.display = "none"
    skillsExprience.style.display = "none"

});
console.log("pallab........................")

// (()=>{ let typed = new Typed(`#multiple`,{
//     String: ["Web development","App development", "UI/UX designer", "Flatter developer"],
//     typeSpeed: 70,
//     backSpeed: 70,
//     backDelay: 1000,
//     loop: true,
// })
// typed();
// const rr = document.querySelector("#multiple")
// rr.style.color= "black";
// console.log("pallab")
// })();
// const positionbox = document.querySelector(".position-text");
// const icon = document.querySelector("#box")
// showmenu = ()=>{
//     console.log("shreya das ")
// }
// icon.addEventListener("click", ()=>{
//     console.log("pldsvhjfsdcvjhjvhfds")
const crossIcon = document.querySelector(".bx-x")
const ul = document.querySelector("ul")


//

crossIcon.style.transition = "0.5s"
let check = true;
const change = ()=>{
    if (check){
    ul.style.right ="0px"
    }
    crossIcon.style.display = "block"


    console.log("ok")
    crossIcon.style.display= "block"
    crossIcon.style.right = "130px"
    crossIcon.style.transition = "all 0.5s"
    crossIcon.classList.add("active")
    
    check = false
}
crossIcon.addEventListener("click",()=>{
    if(check!=true){

    ul.style.right ="-190px"
    }
    crossIcon.style.display = "none"
    crossIcon.classList.remove("active")

    // ul.style.right ="-190px"
    crossIcon.style.transition = "0.5s"

    

    check = true;

})
 const moonIcon = document.querySelector(".bxs-moon")
function ligntMood(){
    document.body.classList.toggle("lignt")
    moonIcon.classList.toggle("bxs-sun")
    console.log("pallab testing")
    // document.body.style.backgroundColor = "white"
    // document.body.style.color = "black"
    

}