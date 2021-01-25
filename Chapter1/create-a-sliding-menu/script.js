let state = true;
document.getElementById("menu").addEventListener("click", e =>{
    if(state){
        document.getElementById("list").hidden = true;
        state = false;
    }else{
        document.getElementById("list").hidden = false;
        state = true;
    }
})