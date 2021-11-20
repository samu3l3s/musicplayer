let audio = document.getElementById("audio");
let control = document.getElementsByClassName("control")

function back() {
    audio.currentTime -= 15;
}

function play() {
    audio.play();
}

function pause() {
    audio.pause();
}

function down() {
    audio.volume -= 0.2;
}

function up() {
    audio.volume += 0.2;
}

function foward() {
    audio.currentTime += 15;
}

/* function hide() {
    control.style.visibility = 'hidden'
}

function appear() {

    control.style.visibility = 'visible'

} */