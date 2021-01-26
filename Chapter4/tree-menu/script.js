let tree = document.getElementById("tree");
let listItems = document.querySelectorAll("li");

for(listItem of listItems){
    let span = document.createElement("span");
    listItem.prepend(span);
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