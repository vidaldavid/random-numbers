let audio = new Audio("audio/sound.wav");

function random() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    audio.play();
    document.getElementById("result").innerHTML = randomNumber;
};