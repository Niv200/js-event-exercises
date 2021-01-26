function showTooltip(event) {
  let tar = event.target;
  toolTip = document.createElement("div");
  toolTip.className = "tooltip";
  if (tar.tagName === "BUTTON") {
    toolTip.innerHTML = tar.dataset.tooltip;

    document.body.append(toolTip);
    let xy = tar.getBoundingClientRect();

    let top = xy.top - toolTip.offsetHeight - 5;
    if (top < 0) {
      top = xy.bottom + 5;
    }
    let left = xy.left + (tar.offsetWidth - toolTip.offsetWidth) / 2;
    if (left < 0) {
      left = 0;
    }
    toolTip.style.top = top + "px";
    toolTip.style.left = left + "px";
  }
}
document.onmouseover = showTooltip;
document.onmouseout = () => toolTip.remove();
