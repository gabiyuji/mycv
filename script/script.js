const music = document.getElementById("sound");

function playSound(obj) {
    music.play();
}

function stopSound(obj) {
    music.pause();
    music.currentTime = 0;
}





