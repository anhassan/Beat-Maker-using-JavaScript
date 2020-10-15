window.addEventListener('load', (event) =>{
    console.log("Page Successfully loaded");
    const sounds = document.getElementsByClassName("sound");
    const pads = document.querySelectorAll(".pads div");

    pads.forEach((pad,ind)=>{
        pad.addEventListener("click",function(e){
            let ballColor = window.getComputedStyle(pad).getPropertyValue('background-color')
            sounds[ind].currentTime=0;
            sounds[ind].play();
            console.log(e.clientX);
            generateBall(ballColor);
            
           
        })

    })

    function generateBall(ballColor){
        let divBall = document.createElement("div");
        divBall.className = "ball";
        divBall.style.backgroundColor = ballColor;
        divBall.style.borderColor = ballColor;
        document.body.appendChild(divBall);
        divBall.addEventListener("animated",function(){
            divBall.parentElement.removeChild(divBall);
    })
}


});