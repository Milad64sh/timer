const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const wm = document.getElementById('w-minutes');
const ws = document.getElementById('w-seconds');

const bm = document.getElementById('b-minutes');
const bs = document.getElementById('b-seconds');

// store a rrefrence to a timer variable
let startTimer;

start.addEventListener('click', () => {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert('timer is already running');
  }
});
reset.addEventListener('click', () => {
  wm.innerText = 25;
  ws.innerText = '00';
  bm.innerText = 5;
  bs.innerText = '00';
  document.getElementById('counter').innerText = 0;
});
stop.addEventListener('click', () => {
  stopInterval();
  startTimer = undefined;
});

timer = () => {
  // work timer count down
  if (ws.innerText != 0) {
    ws.innerText--;
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59;
    wm.innerText--;
  }
  // break timer count down
  if (wm.innerText == 0 && ws.innerText == 0) {
    if (bs.innerText != 0) {
      bs.innerText--;
    } else if (bm.innerText != 0 && bs.innerText == 0) {
      bs.innerText = 59;
      bm.innerText--;
    }
  }
  // increment counter by 1 if cycle completed
  if (
    wm.innerText == 0 &&
    ws.innerText == 0 &&
    bm.innerText == 0 &&
    bs.innerText == 0
  ) {
    wm.innerText = 25;
    ws.innerText = '00';
    bm.innerText = 5;
    bs.innerText = '00';
    document.getElementById('counter').innerText++;
  }
};

// stop timer
stopInterval = () => {
  clearInterval(startTimer);
};
