
let minutes = 50;
let seconds = "00";
let breakCount = 0;
let focusMinutes = minutes - 1;
let interval;

document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;

function start() {
    document.getElementById('start');
    seconds = 59;
    focusMinutes = minutes - 1;

    // iniciar contagem e armazenar o ID do intervalo para pará-lo 
    let interval = setInterval(countFunction, 1000);
    breakCount = 0;
}

let countFunction = () => {
    document.getElementById('minutes').innerHTML = focusMinutes; 
    document.getElementById('seconds').innerHTML = seconds;

    seconds = seconds - 1;

    if (seconds === 0) {
        focusMinutes = focusMinutes - 1;
        if (focusMinutes && seconds === 0) {
            clearInterval(interval); // interrompe a contagem quando atinge 0
            document.getElementById('minutes').innerHTML = "00";
            document.getElementById('seconds').innerHTML = "00";
        }
        seconds = 59; // reinicia os segundos quando atinge 0
    }
}







