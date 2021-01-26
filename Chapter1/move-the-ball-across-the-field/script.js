let field = document.getElementById("field");
let ball = document.getElementById("ball");
ball.style.top = 100 + "px";
ball.style.left = 100 + "px" ;
field.addEventListener("click", event =>{
    let ballX = ball.clientWidth;
    let ballY = ball.clientHeight;
    let cX = event.clientX;
    let cY = event.clientY;
    //Center ball on cursor
    console.log(event.clientY);
    if(cX < 38){
        cX = 38;
    }
    if(cX > 198){
        cX = 198;
    }
    if(cY < 75){
        cY = 75;
    }
    if(cY > 183){
        cY = 183;
    }
    ball.style.top = (cY - (ballY/2)) + "px";
    ball.style.left = (cX - (ballX/2)) + "px" ;
});
