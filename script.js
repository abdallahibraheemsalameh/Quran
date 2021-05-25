const quran = [
  "الناس",
  "الفلق",
  "الاخلاص",
  "النصر",
  "الكافرون",
  "الماعون",
  "الضحى",
  "التين",
  "الليل",
  "الفجر",
  "الغاشيه",
  "الاعلى",
  "الطارق",
  "الانفطار",
  "التكوير",
];

quran.forEach((surah) => {
  const ele = document.createElement("button");

  ele.classList.add("btn");
  ele.innerHTML = surah;
  ele.style.fontFamily = "Amiri";

  ele.addEventListener("click", function () {
    stopSurah();
    document.getElementById(surah).play();
  });
  document.querySelector(".buttons").appendChild(ele);
});

function stopSurah() {
  quran.forEach((element) => {
    document.getElementById(element).pause();
    document.getElementById(element).currentTime = 0;
  });
}
