const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};
let isActive = false;
let intervalId = null;

refs.startBtn.addEventListener('click', startSwitcher);
refs.stopBtn.addEventListener('click', stopSwitcher);

function startSwitcher() {
  if (isActive) {
    return;
  }
  isActive = true;
  refs.startBtn.style.color = 'grey';
  intervalId = setInterval(colorSwitcher, 1000);
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function stopSwitcher() {
  isActive = false;
  refs.startBtn.style.color = 'black';
  clearInterval(intervalId);
}

function colorSwitcher() {
  const randomInteger = randomIntegerFromInterval(0, 5);
  refs.body.style.backgroundColor = `${colors[randomInteger]}`;
}
