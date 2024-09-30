var hour = document.querySelector("#hour");
var min = document.querySelector("#min");
var second = document.querySelector("#second");
var timer;

function startTimer() {
    timer = setInterval(function() {
        let sec = parseInt(second.innerHTML);
        let minValue = parseInt(min.innerHTML);
        let hourValue = parseInt(hour.innerHTML);

        sec++;

        if (sec === 60) {
            sec = 0;
            minValue++;
        }

        if (minValue === 60) {
            minValue = 0;
            hourValue++;
        }

        if (sec < 10) {
            second.innerHTML = `0${sec}`;
        } else {
            second.innerHTML = sec;
        }

        if (minValue < 10) {
            min.innerHTML = `0${minValue}`;
        } else {
            min.innerHTML = minValue;
        }

        if (hourValue < 10) {
            hour.innerHTML = `0${hourValue}`;
        } else {
            hour.innerHTML = hourValue;
        }

    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    second.innerHTML = "00";
    min.innerHTML = "00";
    hour.innerHTML = "00";
}
