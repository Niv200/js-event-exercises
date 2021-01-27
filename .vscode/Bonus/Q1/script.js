thumb = document.getElementById("thumb");
let max = 320;
let min = 20;
thumb.onmousedown = function (event) {
  let x = event.pageX;
  if (x > max) {
    x = max;
  } else if (x < min) {
    x = min;
  }
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
};

function onMouseUp() {
  document.removeEventListener("mouseup", onMouseUp);
  document.removeEventListener("mousemove", onMouseMove);
}

function moveAt(pageX) {
  thumb.style.left = pageX - thumb.offsetWidth / 2 + "px";
}

function onMouseMove(event) {
  let x = event.pageX;
  if (x > 320) {
    x = 320;
  } else if (x < 20) {
    x = 20;
  }
  moveAt(x);
}

thumb.ondragstart = function () {
  return false;
};
