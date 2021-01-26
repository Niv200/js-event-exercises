ul.addEventListener("click", (e) => {
  if (!e.ctrlKey && !e.metaKey) {
    for (let li of ul.children) {
      li.classList.remove("selected");
    }
  }
  if (e.target.tagName === "LI") {
    e.target.classList.add("selected");
  }
});

//Cancel double click.
ul.onmousedown = () => false;
