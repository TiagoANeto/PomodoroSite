
let minutes = 50;
let seconds = "00";
let focusMinutes = minutes;
let interval;
let alarmSound;
let body = document.getElementById('body');

const audio = document.querySelector('audio');

document.getElementById('minutes').innerText = minutes;
document.getElementById('seconds').innerText = seconds;

function start() {
    document.getElementById('start');
    seconds = 59;
    focusMinutes = minutes - 1;

    // iniciar contagem e armazenar o ID do intervalo para pará-lo 
    let interval = setInterval(countFunction, 1000);
}

let countFunction = () => {
    document.getElementById('minutes').innerText = focusMinutes; 
    document.getElementById('seconds').innerText = seconds;
    
        if (focusMinutes === 0 && seconds === 0){
            clearInterval(interval); // interrompe a contagem quando atinge 0
            document.getElementById('minutes').innerText = "00";
            document.getElementById('seconds').innerText = "00";
            audio.play();
        }
        else if(seconds === 0 && focusMinutes > 0){
            focusMinutes = focusMinutes - 1;
            seconds = 59; // reinicia os segundos quando atinge 0
        }
        else{
            seconds = seconds - 1;
        }
}

function AddTime() {
    document.getElementById('minutes').innerText = focusMinutes += 5;
}

function SubtractTime(){
    document.getElementById('minutes').innerText = focusMinutes -= 5;
}

function Pause(){
    document.getElementById('minutes');
    document.getElementById('seconds');
    clearInterval(interval);
}

    









