let links = document.querySelectorAll('a');
for(link of links){
    link.onclick = function(e){
        let img = document.getElementById('largeImg');
        img.src = e.target.closest('a').href;
        return false;
     };
}
