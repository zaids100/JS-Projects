const bubbleDiv = document.querySelector('.bubblesDiv');
const number = document.querySelector('.Number');
const header = document.querySelector('.header');
const time = document.querySelector('.time');
const totalScore = document.querySelector('.score');
let timer = 60;
let num = 0;
let score = 0;

generateBubbles();
putRandomNumber();
startTimer();
chooseNumber();

function putRandomNumber() {
    num = Math.floor(Math.random() * 10);
    number.innerHTML = num;
}

function generateBubbles() {
    bubbleDiv.innerHTML = "";
    for (let i = 0; i <= 119; i++) {
        let rnd = Math.floor(Math.random() * 10);
        bubbleDiv.innerHTML += `<div class="bubble">${rnd}</div>`;
    }
}

function startTimer() {
    setInterval(() => {
        if (timer === 0) {
            header.innerHTML = `<div>GAME OVER</div>`;
            location.reload();
        }
        timer--;
        time.innerHTML = timer;
    }, 1000);
}

function chooseNumber() {
    bubbleDiv.addEventListener('click', (event) => {
        const clickedBubble = event.target;
            if (parseInt(clickedBubble.textContent) === num) {
                score += 10;
                totalScore.innerHTML = score;
                putRandomNumber();
                generateBubbles();
            }
    });
}
