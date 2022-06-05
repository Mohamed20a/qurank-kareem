

let fixedNav = document.querySelector(".navbar"),
scrollBtn = document.querySelector(".scrollBtn");
window.addEventListener("scroll", ()=>{
scrollup()
})
scrollBtn.addEventListener('click',()=>{
window.scrollTo({
top : 0 ,
behavior : "smooth"
})
})
scrollup()
function scrollup(){
window.scrollY > 50 ? fixedNav.classList.add('active') : fixedNav.classList.
remove('active');
window.scrollY > 100 ? scrollBtn.classList.add('active') : scrollBtn.classList.
remove('active'); 
}



let exploreBtn = document.querySelector('.title .btn'),
    BoxSection = document.querySelector('.box');
exploreBtn.addEventListener('click',()=>{
    BoxSection.scrollIntoView({
        behavior : "smooth"
    })
})  


let exploreBtn2 = document.querySelector('.btn2 .fas'),
    HeaderSection = document.querySelector('.header');
exploreBtn2.addEventListener('click',()=>{
  HeaderSection.scrollIntoView({
        behavior : "smooth"
    })
}) 