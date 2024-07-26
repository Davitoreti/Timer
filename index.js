const stopwatch = document.getElementById('timer');
const spanHour = document.getElementById('hour');
const spanMinutes = document.getElementById('minutes');
const spanSeconds = document.getElementById('seconds');
const button = document.getElementById('button-start');

let seconds = 0;
let minutes = 0;
let hour = 0;
let interval;

button.addEventListener('click', toggleTimer);

function toggleTimer() {
    if (!interval) {
        interval = setInterval(() => {
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes === 60) {
                minutes = 0;
                hour++;
            }

            spanHour.innerText = hour.toString().padStart(2, '0') + ' : ';
            spanMinutes.innerText = minutes.toString().padStart(2, '0') + ' : ';
            spanSeconds.innerText = seconds.toString().padStart(2, '0');
        }, 1000);

        button.textContent = 'Pause';
    } else {
        clearInterval(interval);
        interval = null;

        button.textContent = 'Start';
    }
}
