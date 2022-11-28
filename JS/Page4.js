

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
         <div class="surah">
          <p>${surahs[i].name}</p> 
         <p>${surahs[i].englishName}</p> 
         </div>
         `

        }
        let SurahsTitels = document.querySelectorAll('.surah');
        let popup = document.querySelector('.surah-popup'),
            AyatContainer = document.querySelector('.ayat');
        SurahsTitels.forEach((title,index)=>{
            title.addEventListener('click',()=>{
                title.scrollTo({
                    behavior : "auto"
               })
            fetch(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${index + 1}`)
                .then(response => response.json())
                .then(data=>{
                    AyatContainer.innerHTML = "";
                    let Ayat = data.result;
                    Ayat.forEach(aya=>{
                        popup.classList.add('active');
                        AyatContainer.innerHTML += `  
                        <div style="background:rgb(255, 250, 243); background-size: cover; ">
                            <span style="font-size:20px;color:#247429; ">(${aya.aya})- (${aya.arabic_text})  => </span>
                            <span style="font-size:20px; margin:20px;"> ${aya.translation}</span>
                            <hr>
                        </div>    
                        `
                    })  
                })
            })
         })  
         let closePopup = document.querySelector('.close-popup');
         closePopup.addEventListener('click',()=>{
             popup.classList.remove('active');
         })   
    })
}    



let fixedNav = document.querySelector(".header"),
    scrollBtn = document.querySelector(".scrollBtn");
window.addEventListener("scroll", ()=>{
    ahmed()
})
scrollBtn.addEventListener('click',()=>{
  window.scrollTo({
    top :0 ,
    behavior : "smooth"
  })
})
ahmed()
function ahmed (){
    window.scrollY > 50 ? fixedNav.classList.add('active') : fixedNav.classList.
    remove('active');
    window.scrollY > 100 ? scrollBtn.classList.add('active') : scrollBtn.classList.
    remove('active'); 
}