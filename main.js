let timer_runs = false;
const alarm = new Audio("Eieruhr_alarm.mp3");
let button = document.getElementById("button");
let time = document.getElementById("time");

function run_timer(end_time){
    var timer = setInterval(function(){
        let time_left = end_time - new Date().getTime();
        if(time_left > 0){
            let minutes = Math.floor(time_left / (1000 * 60));
            let seconds = Math.round((time_left / 1000) % 60)
            if(seconds < 10) seconds = "0" + seconds;
            time.innerHTML = "0" + minutes + " : " + seconds;
        } else {
            time.innerHTML = "00 : 00";
            alarm.play();
            clearInterval(timer);
        }
    }, 1000);
}

function start_timer(){
    if(!timer_runs){
        timer_runs = true;
        setTimeout(() => button.src = "img/restart_button.png", 1000);

        let start_time = new Date().getTime();
        const five_minutes = 1000 * 60 * 5;
        let end_time = start_time + five_minutes;
        run_timer(end_time);

    } else {
        clearInterval(timer);
        time.innerHTML = "05 : 00";        
    }
    }