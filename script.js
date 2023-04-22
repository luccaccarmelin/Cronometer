const minutesE1 = document.querySelector("#minutes")
const secondsE1 = document.querySelector("#seconds")
const millisecondsE1 = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const restartBtn = document.querySelector("#restartBtn")

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTime);
pauseBtn.addEventListener("click", pauseTime);
resumeBtn.addEventListener("click", resumeTime);
restartBtn.addEventListener("click", restartTime);

function startTime() {

  interval = setInterval(() => {
    if(!isPaused) {
      milliseconds += 10;

      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }

      if  (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      minutesE1.textContent = formatTime(minutes);
      secondsE1.textContent = formatTime(seconds);
      millisecondsE1.textContent = formatTime(milliseconds);
      
    }
  }, 10);

  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function pauseTime() {
  isPaused = true
  pauseBtn.style.display = "none"
  resumeBtn.style.display = "block";
}

function resumeTime() {
  isPaused = false;
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
}

function resetTime() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  minutesE1.textContent = "00"
  secondsE1.textContent = "00"
  millisecondsE1.textContent = "000"

  startBtn.style.display = "block"
  pauseBtn.style.display = "none"
  resumeBtn.style.display = "none"
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}
