
let hadithContainer = document.querySelector('.hadithContainer'),
    next = document.querySelector('.buttons .next'),
    prev = document.querySelector('.buttons .prev'),
    number = document.querySelector('.buttons .number');
    let hadithIndex = 0;
HadithChanger();
function  HadithChanger()
{
    fetch("https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=300")
    .then(response => response.json())
    .then(data =>{

        let Hadiths = data.items;
        changeHadith();
        next.addEventListener('click',()=>{
            hadithIndex == 299 ? hadithIndex = 0 : hadithIndex++;
            changeHadith()
        })
        prev.addEventListener('click',()=>{
            hadithIndex == 0 ? hadithIndex = 299 : hadithIndex--;
            changeHadith()
        })
        function changeHadith()
        {
            hadithContainer.innerText = Hadiths[hadithIndex].arab;
            number.innerText = `300 - ${hadithIndex + 1}`
        }  
    })
}