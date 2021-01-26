let transX = 0;
const increment = 400;
let buttonRight = document.getElementById("right");
let buttonLeft = document.getElementById("left");
let imgs = document.getElementById("container");
imgs.style.transform = "translateX(-25px)";

buttonRight.addEventListener("click", (e) => {
    transX = transX - increment;
  if (!(transX >= -925)) {
    transX = -925;
  }
  imgs.style.transform = "translateX(" + transX + "px)";
});

buttonLeft.addEventListener("click", (e) => {
    transX = transX + increment;
  if (!(transX <= -25)) {
    transX = -25;
  }
  imgs.style.transform = "translateX(" + transX + "px)";
});

