let homeScoreEl = document.getElementById("home-score-el")
let homeCount = 0

function homeAdd1Points(){
    homeCount++
    homeScoreEl.textContent = homeCount
}

function homeAdd2Points(){
    homeCount += 2
    homeScoreEl.textContent = homeCount
}

function homeAdd3Points(){
    homeCount += 3
    homeScoreEl.textContent = homeCount
}


let guestScoreEl = document.getElementById("guest-score-el")
let guestCount = 0

function guestAdd1Points(){
    guestCount++
    guestScoreEl.textContent = guestCount
}

function guestAdd2Points(){
    guestCount += 2
    guestScoreEl.textContent = guestCount
}

function guestAdd3Points(){
    guestCount += 3
    guestScoreEl.textContent = guestCount
}

const timerEl = document.querySelector('.timer');
const periodEl = document.querySelector('.period');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');

let timer = 0;
let period = 0;
let timerInterval;

playBtn.addEventListener('click', () => {
  timerInterval = setInterval(() => {
    if (period === 4) {
      clearInterval(timerInterval);
    } else {
      timer++;
      if (timer === 30) {
        timer = 0;
        period++;
        periodEl.textContent = period;
      }
      timerEl.textContent = timer;
    }
  }, 1000);
});

pauseBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
});

function newGame(){
    homeCount = 0
    homeScoreEl.textContent = homeCount
    guestCount = 0
    guestScoreEl.textContent = guestCount
    timer = 0
    timerEl.textContent = timer
    period = 0
    periodEl.textContent = period
}

let saveEl = document.getElementById("save-el")

function saveGame(){
    let saveCount = " HOME - " + homeCount + " | GUEST - " + guestCount
    saveEl.textContent =  saveCount
    newGame()
}
