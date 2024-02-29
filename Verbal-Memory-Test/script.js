const api = "https://random-word-api.vercel.app/api?words=10"; // Fixed API URL
const startBtn = document.querySelector('.startBtn');
const mainContainer = document.querySelector('.main-container');
let words = [];
let wordSet = new Set();
let randomVal = 0;
let lives = 3;
let score = 0;

startBtn.addEventListener('click', startGame);

 function startGame() {
    words=[];
    lives=3;
    score=0;
    mainContainer.innerHTML = "";
    getWords(); // Wait for the words to be fetched
    displayWord();
}


async function getWords() {
    try {
        let response = await fetch(api);
        if (!response.ok) {
            throw new Error('Failed to fetch words');
        }
        let temp=[];
        temp=await response.json();
        words.push(...temp);
    } catch (error) {
        console.log("Cannot fetch words: " + error);
    }
}

function displayWord() {
    mainContainer.innerHTML = "";
    randomVal = Math.floor(Math.random() * words.length); // Adjusted randomVal calculation
    mainContainer.innerHTML = `
        <div class="gameDetails">
            <div class="lives">Lives | ${lives}</div>
            <div class="score">Score | ${score}</div>
        </div>
        <div class="word">${words[randomVal]}</div>
        <div class="btns">
            <button class="startBtn seen">SEEN</button>
            <button class="startBtn new">NEW</button>
        </div>
    `;

    const newBtn = document.querySelector('.new');
    const seenBtn = document.querySelector('.seen');

    newBtn.addEventListener('click', verifyAnswerNew);
    seenBtn.addEventListener('click', verifyAnswerSeen);
}

function verifyAnswerNew() {
    if (!wordSet.has(words[randomVal])) {
        score++;
        wordSet.add(words[randomVal]);
    } else {
        lives--;
        if (lives === 0) {
            displayScore();
            return;
        }
    }
    if(score%10==0)
    {
       getWords();
    }
    displayWord();
}

function verifyAnswerSeen() {
    if (wordSet.has(words[randomVal])) {
        score++;
        wordSet.add(words[randomVal]);
    } else {
        lives--;
        if (lives === 0) {
            displayScore();
            return;
        }
    }
    displayWord();
}

function displayScore() {
    mainContainer.innerHTML = `
        <div class="logo"><img src="659c54675c855b43f49866fa_Verbal memory games.webp"></div>
        <div class="header">Verbal Memory Test</div>
        <div class="score-info">Your final score is : ${score}</div>
        <button class="startBtn playAgain">Play Again</button>
    `;
     const playAgain=document.querySelector('.playAgain');
     playAgain.addEventListener('click',startGame);

}
