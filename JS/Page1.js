
let menu = document.querySelector('.navbar-toggler');
let navbar = document.querySelector('.navbar .collapse');
let header = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

if(window.scrollY > 0){
    header.classList.add('active');
}else{
    header.classList.remove('active');
}

}



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