
retrieveLinks();
function retrieveLinks(){
    let links = document.links;
    for(let i=0; i < links.length; i++){
     link = links[i];
     if(link.title !== ''){
        link.addEventListener('mouseover',createTip);
        link.addEventListener('mouseout',cancelTip);
     }
    //  console.log(a);
  } //END FOR

}

// function showTip(show){
//     if(show){
//         var title = this.title;
//         this.title = '';
//         this.setAttribute("tooltip", title);
//     }else{
//         var title = this.getAttribute("tooltip");
//         this.title = title;
//         this.removeAttribute("tooltip");
//     }
// }

function createTip(ev){
    var title = this.title;
    this.title = '';
    this.setAttribute("tooltip", title);
}

function cancelTip(ev){
var title = this.getAttribute("tooltip");
this.title = title;
this.removeAttribute("tooltip");
}
