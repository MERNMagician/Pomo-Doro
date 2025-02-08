let second = 0;
let elapsedTime = null;
const time = document.querySelector("#time");

function incrementSecond() {
  second++;
  setTime();
}

function appendZero(value) {
  return String(value).padStart(2, "0");
}
function setTime() {
  const minutes = Math.floor(second / 60);
  const seconds = Math.floor(second % 60);
  time.innerHTML = `${appendZero(minutes)} : ${appendZero(seconds)}`;
}
function startTime() {
  if (elapsedTime) pauseTime();
  elapsedTime = setInterval(incrementSecond, 1000);
}

function pauseTime() {
  clearInterval(elapsedTime);
}

function restartTime() {
  pauseTime();
  second = 0;
  setTime();
}
