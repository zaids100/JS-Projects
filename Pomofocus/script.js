const pomoMinutes = document.querySelector('.minutes');
const pomoSeconds = document.querySelector('.seconds');
const startTime = document.querySelector('.start');
const shortBreak = document.querySelector('.shortBreak');
const longBreak = document.querySelector('.longBreak');
const pomodoro = document.querySelector('.pomodoro');
const addTask = document.querySelector('.addTask');
const taskBar = document.querySelector('.taskBar');
const saveTask = document.querySelector('.save');
const taskInput = document.querySelector('.taskInput');
const allTasks = document.querySelector('.allTasks');
let isTimerRunning = false;
let timerInterval;
let timerValue = 25 * 60; // Initial duration set to 25 minutes in seconds

shortBreak.addEventListener('click', () => {
    pomoMinutes.textContent = "05:";
    pomoSeconds.textContent = "00";
    clearInterval(timerInterval);
    startTime.textContent = "Start";
    document.querySelector('#body').style.backgroundColor = "#397097";
    timerValue = 5 * 60;
});

pomodoro.addEventListener('click', () => {
    pomoMinutes.textContent = "25:";
    pomoSeconds.textContent = "00";
    clearInterval(timerInterval);
    startTime.textContent = "Start";
    document.querySelector('#body').style.backgroundColor = "#ba4949";
    timerValue = 25 * 60;
});

longBreak.addEventListener('click', () => {
    pomoMinutes.textContent = "15:";
    pomoSeconds.textContent = "00";
    clearInterval(timerInterval);
    startTime.textContent = "Start";
    document.querySelector('#body').style.backgroundColor = "#38858a";
    timerValue = 15 * 60;
});

startTime.addEventListener('click', () => {
    countDownTimer();
});

addTask.addEventListener('click', () => {
    document.querySelector('.task').style.display = "flex";
});



saveTask.addEventListener('click', () => {
    let task = document.createElement('div');
    task.classList.add('taskBar');

    let tickImg = document.createElement('img');
    tickImg.classList.add('tick');
    tickImg.src = "/assets/asset 8.png";
    tickImg.alt = "tick";

    let taskText = document.createElement('span');
    taskText.textContent = `${taskInput.value}`;

    // Append elements to taskBar
    task.appendChild(tickImg);
    task.appendChild(taskText);

    // Append taskBar to allTasks container
    allTasks.appendChild(task);

    document.querySelector('.task').style.display = "none";

});

allTasks.addEventListener('click', (event) => {
    if (event.target.tagName === "DIV") {
        event.target.style.textDecoration = "line-through";
        let tickImg = event.target.querySelector('.tick');
        if (tickImg) {
            tickImg.src = "/assets/asset 27.png";
        }
    }
});

function countDownTimer() {
    if (isTimerRunning) {
        clearInterval(timerInterval); // Stop the timer
        startTime.textContent = "Start"; // Change button text to "Start"
    } else {
        startTime.textContent = "Stop"; // Change button text to "Stop"
        startTimer(); // Start or resume the timer from the stored value
    }
    isTimerRunning = !isTimerRunning; // Toggle the timer running state
}

function startTimer() {
    let timer = timerValue;

    timerInterval = setInterval(function () {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        pomoMinutes.textContent = minutes + ":";
        pomoSeconds.textContent = seconds;

        if (--timer < 0) {
            clearInterval(timerInterval); // Stop the timer when it reaches zero
            startTime.textContent = "Start"; // Change button text to "Start"
            isTimerRunning = false; // Set timer running state to false
            // You can add any action you want when the timer reaches zero here
        }

        // Update the timer value every second
        timerValue = timer;
    }, 1000);
}
