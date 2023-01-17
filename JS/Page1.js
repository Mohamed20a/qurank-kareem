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
    praySection = document.querySelector('.pray');
exploreBtn.addEventListener('click',()=>{
    praySection.scrollIntoView({
        behavior : "smooth"
    })
})   





let cards = document.querySelector('.cards');
getPrayTime();
function getPrayTime()
{


    fetch("https://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=8")
    .then(response => response.json())
    .then(data => {
        
        let times = data.data.timings;
        
        const prayersTimes = {
            الفجر: times.Imsak,
            الشروق: times.Sunrise,
            الظهر: times.Dhuhr,
            العصر: times.Asr,
            المغرب: times.Sunset,
            العشاء: times.Isha,
        };

        

        
        cards.innerHTML = '';
        
            for (let time in prayersTimes)
            {
                
                
                cards.innerHTML+= 
                
                
                `
                    <div class="card">
                        <div class="circle">
                            <svg>
                                <Circle cx="100" cy="100" r="100"></Circle>
                            </svg>
                            <div class="prayTime">${prayersTimes[time]}</div>
                        </div>
                        <p>${time}</p>
                        
                    </div>
                `
                }
            
        
    })
    
}  