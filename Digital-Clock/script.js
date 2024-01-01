let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const updateTime = () => {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let ampm = currentHours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    currentHours = currentHours % 12;
    currentHours = currentHours ? currentHours : 12;

    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    hours.innerHTML = (currentHours < 10 ? "0" : "") + currentHours;
    minutes.innerHTML = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    seconds.innerHTML = (currentSeconds < 10 ? "0" : "") + currentSeconds + ' ';
};

const getTime = () => {
    setInterval(updateTime, 1000);
};

getTime();
