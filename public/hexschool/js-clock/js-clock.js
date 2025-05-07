let clockMorningItem = document.querySelector('.clock-panel-hour-morning');
let clockLine = document.querySelector('.clock-panel-hour-line');
let clockAfternoonItem = document.querySelector('.clock-panel-hour-afternoon');
let clockPanelMinute = document.querySelector('.clock-panel-minute');
let minuteStart = document.querySelector('.clock-panel-minute-start');
let clockTime = document.querySelector('.clockTime');
let clockTimeHour = document.querySelector('.clockTime-hour');
let clockTimeMinute = document.querySelector('.clockTime-minute');
let clockTimeSecond = document.querySelector('.clockTime-second');

function getClock() {
  for (let i = 1; i <= 12; i++) {
    clockMorningItem.innerHTML += `<div class="hour-item hour-item-morning" style="transform: rotate(${i * 30}deg) translate(90px) rotate(${-i * 30}deg)">${i}</div>`;
    clockLine.innerHTML += `<div class="hour-item-line" style="transform: rotate(${i * 30}deg)"></div>`;
    clockAfternoonItem.innerHTML += `<div class="hour-item hour-item-afternoon" style="transform: rotate(${i * 30}deg) translate(130px) rotate(${-i * 30}deg)">${i + 12}</div>`;

    minuteStart.innerHTML += `<div class="minute-item minute-item-start" style="transform: rotate(${(i * 30) - 15}deg)">✦</div>`;
  }
  for (let i = 1; i <= 60; i++) {
    if (i % 5 !== 0) {
      clockPanelMinute.innerHTML += `<div class="minute-item" style="transform: rotate(${i * 6}deg)"></div>`;
    }
  }
  getClockHours()
  getClockMinutes()
  getClockSeconds()
}

function getClockHours() {
  let date = new Date();
  let hours = date.getHours();
  for (let i = 1; i <= 12; i++) {
    if (hours > 12) {
      clockTimeHour.style.transform = `rotate(${(hours - 12) * 30}deg)`;

    } else {
      clockTimeHour.style.transform = `rotate(${hours * 30}deg)`;
    }
  }
  console.log("hours" + hours)
}
function getClockMinutes() {
  let date = new Date();
  let minutes = date.getMinutes();

  clockTimeMinute.style.transform = `rotate(${minutes * 6}deg)`;
  console.log("minutes" + minutes)
}
function getClockSeconds() {
  let date = new Date();
  let seconds = date.getSeconds();
  clockTimeSecond.style.transform = `rotate(${seconds * 6}deg)`;
  // console.log('seconds' + seconds)

}

getClock()
setInterval(getClockSeconds, 1000)
setInterval(getClockMinutes, 60 * 1000)
setInterval(getClockHours, 60 * 60 * 1000)