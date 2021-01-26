let tree = document.getElementById("tree");
let lists = document.querySelectorAll("li");

for(list of lists){
    let span = document.createElement("span");
    list.prepend(span);
    span.append(span.nextSibling);
}

tree.addEventListener("click", e => {
    if(e.target.tagName === "SPAN"){
        let childCont = e.target.parentNode.querySelector('ul');
        if (childCont){
            childCont.hidden = !childCont.hidden;
        }
    }
});