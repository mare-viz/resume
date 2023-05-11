var elemSett = document.getElementById("menu");
var elemNav = document.getElementById("nav");
let isOn = false;

elemSett.addEventListener("click", () => {
  if (isOn) {
    elemNav.className = "header__menu__nav hide";
    isOn = !isOn;
  } else {
    elemNav.className = "header__menu__nav";
    isOn = !isOn;
  }
});
