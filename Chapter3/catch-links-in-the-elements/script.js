let links = document.getElementsByClassName("links");
for(link of links){
    link.onclick = function(event){
        let href = event.target.closest('a');
        if(!confirm(href)){
            return false; 
        }
     };
}
