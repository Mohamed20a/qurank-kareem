"use strict";

var hadithContainer = document.querySelector('.hadithContainer'),
    next = document.querySelector('.buttons .next'),
    prev = document.querySelector('.buttons .prev'),
    number = document.querySelector('.buttons .number');
var hadithIndex = 0;
HadithChanger();

function HadithChanger() {
  fetch("https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=300").then(function (response) {
    return response.json();
  }).then(function (data) {
    var Hadiths = data.items;
    changeHadith();
    next.addEventListener('click', function () {
      hadithIndex == 299 ? hadithIndex = 0 : hadithIndex++;
      changeHadith();
    });
    prev.addEventListener('click', function () {
      hadithIndex == 0 ? hadithIndex = 299 : hadithIndex--;
      changeHadith();
    });

    function changeHadith() {
      hadithContainer.innerText = Hadiths[hadithIndex].arab;
      number.innerText = "300 - ".concat(hadithIndex + 1);
    }
  });
}
//# sourceMappingURL=Page2.dev.js.map
