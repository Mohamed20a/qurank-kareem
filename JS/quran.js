let SurahsContainer = document.querySelector('.surahContainer');
getSurahs()
function getSurahs()
{
    fetch("https://api.alquran.cloud/v1/meta")
    .then(response => response.json())
    .then(data=>{
        let surahs = data.data.surahs.references;
        let numberOfSurahs = 114;
        SurahsContainer.innerHTML = "";
        for (let i = 0; i < numberOfSurahs; i++) {

            SurahsContainer.innerHTML += 
        
        `
        <div class="surah"> <p>${surahs[i].name}</p> 
        <p>${surahs[i].englishName}</p> 
        </div>
        `

        }
        let SurahsTitels = document.querySelectorAll('.surah');
        let popup = document.querySelector('.surah-popup');
        let AyatContainer = document.querySelector('.ayat');
        let displayedSurah = null;

        SurahsTitels.forEach((title, index) => {
            title.addEventListener('click', () => {
                title.scrollTo({
                    behavior: 'smooth',
                });
            
                if (displayedSurah !== title) {
                    fetch(`https://api.alquran.cloud/v1/surah/${index + 1}`)
                    .then(response => response.json())
                    .then(data => {
                        AyatContainer.innerHTML = '';
                        let Ayat = data.data.ayahs;
                        let AyatName = data.data;

                        // عرض اسم السورة قبل عرض الآيات
                        AyatContainer.innerHTML += `
                            <div class="ayat-name">
                                <h1 class="surahName">${AyatName.name}</h1> 
                                <h1 class="surahNum"> عدد الأيات : <span class="surah-num">( ${AyatName.numberOfAyahs} )</span></h1> 
                            </div>
                            <br>
                        `;
            
                        Ayat.forEach(aya => {
                            popup.classList.add('active');
                            AyatContainer.innerHTML += `
                                <div id="ayats">
                                    <span style="font-size:20px;color:#247429;font-family: quran; "> ﴿ ${aya.numberInSurah} ﴾</span>
                                    <span style="font-size:24px; margin:8px;font-family: quran;">${aya.text} .</span>
                                </div> 
                                <br>
                            `;
                        });
                    });
            
                    displayedSurah = title;
                }
            });
        });  
        let closePopup = document.querySelector('.close-popup');
        closePopup.addEventListener('click',()=>{
            popup.classList.remove('active');
        })   
    })
}


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