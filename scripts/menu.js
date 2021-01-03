var x = document.getElementById("menuMusic"); 

function playAudio() { 
    x.play(); 
} 

function pauseAudio() { 
    x.pause(); 
} 

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () =>{
    window.location.href = "index.html";
    console.log("click on start button");
})