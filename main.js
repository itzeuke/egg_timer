let timer_runs = false;
const alarm = new Audio("Eieruhr_alarm.mp3");
const click = new Audio("click.wav");
let button = document.getElementById("button");
let time = document.getElementById("time");

let timer;

function start_timer(){
    if(!alarm.paused) alarm.pause();
    if(!timer_runs){
        timer_runs = true;
        click.play();
        button.src = "img/restart_button.png";

        let start_time = new Date().getTime();
        const five_minutes = 1000 * 60 * 5;
        let end_time = start_time + five_minutes;

        timer = setInterval(function(){
            let time_left = end_time - new Date().getTime();
            if(time_left > 0){
                let minutes = Math.floor(time_left / (1000 * 60));
                let seconds = Math.round((time_left / 1000) % 60)
                if(seconds < 10) seconds = "0" + seconds;
                time.innerHTML = "0" + minutes + " : " + seconds;
                console.log(time_left);
            } else {
                time.innerHTML = "00 : 00";
                alarm.play();
                button.src = "img/stop_button.png";
            }
        }, 1000);
    } else {
        click.play();
        button.src = "img/start_button.png";
        clearInterval(timer);
        time.innerHTML = "05 : 00";
        timer_runs = false;
    }
    }