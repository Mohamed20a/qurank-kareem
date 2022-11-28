

let zekrContainer = document.querySelector('.zekrContainer'),
    next = document.querySelector('.buttons .next'),
    prev = document.querySelector('.buttons .prev'),
    number = document.querySelector('.buttons .number');
let zekrIndex = 0;
getazkar();
function getazkar()
{
    fetch("https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json")
    .then(Response => Response.json())
    .then(data =>{

        let azkar = data.تسابيح;
        zekrContainer.innerHTML += 
        `
             
            <div class="div2">${azkar[ zekrIndex].content}</div>
           
        `
        getazkar();
        next.addEventListener('click',()=>{
            zekrIndex == 15 ? zekrIndex = 0 : zekrIndex++;
            getazkar()
        })
        prev.addEventListener('click',()=>{
            zekrIndex == 0 ? zekrIndex = 15 : zekrIndex--;
            getazkar()
        })
        function getazkar()
        {
            zekrContainer.innerText =  azkar[zekrIndex].content;
            number.innerText = `16 - ${zekrIndex + 1}`
        }    
    })
}


let taspehContainer = document.querySelector('.taspehContainer'),
    next1 = document.querySelector('.buttons1 .next1'),
    prev1 = document.querySelector('.buttons1 .prev1'),
    number1 = document.querySelector('.buttons1 .number1');
let taspehIndex = 0;
gettaspeh();
function gettaspeh()
{
    fetch("https://www.hisnmuslim.com/api/ar/27.json")
    .then(Response => Response.json())
    .then(data =>{

        let taspeh = data[Object.keys(data)[0]];
        taspehContainer.innerHTML += 
        `
             
            <div class="div2">${taspeh[taspehIndex].content}</div>
           
        `
        gettaspeh();
        next1.addEventListener('click',()=>{
            taspehIndex == 23 ? taspehIndex = 0 : taspehIndex++;
            gettaspeh()
        })
        prev1.addEventListener('click',()=>{
            taspehIndex == 0 ? taspehIndex = 23 : taspehIndex--;
            gettaspeh()
        })
        function gettaspeh()
        {
            taspehContainer.innerText =  taspeh[taspehIndex].ARABIC_TEXT;
            number1.innerText = `24 - ${taspehIndex + 1}`
        }    
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