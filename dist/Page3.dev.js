"use strict";

var SurahsContainer = document.querySelector('.surahContainer');
getSurahs();

function getSurahs() {
  fetch("https://api.alquran.cloud/v1/meta").then(function (response) {
    return response.json();
  }).then(function (data) {
    var surahs = data.data.surahs.references;
    var numberOfSurahs = 114;
    SurahsContainer.innerHTML = "";

    for (var i = 0; i < numberOfSurahs; i++) {
      SurahsContainer.innerHTML += "\n         <div class=\"surah\"> <p>".concat(surahs[i].name, "</p> \n         <p>").concat(surahs[i].englishName, "</p> \n         </div>\n         ");
    }

    var SurahsTitels = document.querySelectorAll('.surah');
    var popup = document.querySelector('.surah-popup'),
        AyatContainer = document.querySelector('.ayat');
    SurahsTitels.forEach(function (title, index) {
      title.addEventListener('click', function () {
        title.scrollTo({
          behavior: "auto"
        });
        fetch("https://api.alquran.cloud/v1/surah/".concat(index + 1)).then(function (response) {
          return response.json();
        }).then(function (data) {
          AyatContainer.innerHTML = "";
          var Ayat = data.data.ayahs;
          Ayat.forEach(function (aya) {
            popup.classList.add('active');
            AyatContainer.innerHTML += "  \n                        <div>\n                            <span style=\"font-size:20px;color:#247429; \"> { ".concat(aya.numberInSurah, " }  -</span>\n                            <span style=\"font-size:20px; margin:8px;\">").concat(aya.text, " .</span>\n                        </div> \n                        <br>\n                        ");
          });
        });
      });
    });
    var closePopup = document.querySelector('.close-popup');
    closePopup.addEventListener('click', function () {
      popup.classList.remove('active');
    });
  });
}

var fixedNav = document.querySelector(".header"),
    scrollBtn = document.querySelector(".scrollBtn");
window.addEventListener("scroll", function () {
  ahmed();
});
scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
ahmed();

function ahmed() {
  window.scrollY > 50 ? fixedNav.classList.add('active') : fixedNav.classList.remove('active');
  window.scrollY > 100 ? scrollBtn.classList.add('active') : scrollBtn.classList.remove('active');
}
//# sourceMappingURL=Page3.dev.js.map
