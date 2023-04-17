// Select Items
const cards = document.querySelector('.cards');

    // Call the prayer function
    getPrayTime();
    
    // Prayer Function
    function getPrayTime()
    {
    fetch("https://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=8")
    .then(response => response.json())
    .then(data => {

        let times = data.data.timings;
    
        // Calculating time according to the 12-hour system
        const prayersTimes = {
            الفجر: new Date(`01/01/2000 ${times.Fajr}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            الشروق: new Date(`01/01/2000 ${times.Sunrise}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            الظهر: new Date(`01/01/2000 ${times.Dhuhr}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            العصر: new Date(`01/01/2000 ${times.Asr}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            المغرب: new Date(`01/01/2000 ${times.Maghrib}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            العشاء: new Date(`01/01/2000 ${times.Isha}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
        };
    
        cards.innerHTML = '';
        
        for (let time in prayersTimes)
        {
            cards.innerHTML+= `
                <div class="card">
                    <div class="circle">
                        <svg>
                            <Circle cx="100" cy="100" r="100"></Circle>
                        </svg>
                        <div class="prayTime">${prayersTimes[time]}</div>
                    </div>
                    <p>${time}</p>
                </div>
            `;
        }
    })
}    


let menu = document.querySelector('.navbar-toggler');
let navbar = document.querySelector('.navbar .collapse');
let header = document.querySelector('.navbar');

// Add click event on menu button
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Add scroll event
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

if(window.scrollY > 0){
    header.classList.add('active');
}else{
    header.classList.remove('active');
}

}


// Add click event for scroll up button
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