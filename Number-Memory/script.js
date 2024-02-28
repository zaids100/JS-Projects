const startBtn=document.querySelector('.startBtn');
const mainContainer=document.querySelector('.main-container');
const correct=document.querySelector('.correct');
const wrong=document.querySelector('.wrong');
let i=0;
let randomNumber=0;
let range=10;
let min=1;
startBtn.addEventListener('click',startGame);

function startGame()
{   
    i=0;
    mainContainer.innerHTML="";
    generateRandomNumber();
}

function generateRandomNumber()
{    
    mainContainer.innerHTML="";
     randomNumber=Math.floor(Math.random()*(range - min + 1))+min;
     mainContainer.innerHTML=`<div class="number">${randomNumber}</div>
                              <span class="loader"></span>`;
                             
     const showNumber=setTimeout(()=>{
           mainContainer.innerHTML="";
           takeUserInput();
     },5000);

    
}

function takeUserInput()
{   
                                 
    mainContainer.innerHTML=`<h3 class="question">What was the number ?</h3>
                             <input class="userInput" type="number">
                             <button class="submit startBtn">Submit</button>`;
                             const submit=document.querySelector('.submit');
                             submit.addEventListener('click', checkAns);
}

function checkAns(){
    let userAns=document.querySelector('.userInput');
    if(userAns.value==randomNumber)
    {    
       
        mainContainer.innerHTML="";
        mainContainer.innerHTML=`<div class="generatedNumber">Number</div>
                                 <div class="randomNumber">${randomNumber}</div>
                                 <div class="yourAnswer">Your Number</div>
                                 <div class="userAnswer">${userAns.value}</div>
                                 <div class="level">Level</div>
                                 <div class="userLevel">${i}</div>
                                 <button class="startBtn nextBtn">Next</button>`;
                       
        min*=10;
        range*=10;
        const nextBtn=document.querySelector('.nextBtn');
        correct.play();
        nextBtn.addEventListener('click',generateRandomNumber);
        i++;
    }
    else{
       
        mainContainer.innerHTML="";
        mainContainer.innerHTML=`<div class="generatedNumber">Number</div>
                                 <div class="randomNumber">${randomNumber}</div>
                                 <div class="yourAnswer">Your Number</div>
                                 <div class="userAnswer">Wrong Answer</div>
                                 <div class="level">Level - ${i}</div>
                                 <button class="startBtn reset">Play Again</button>`;
        const reset=document.querySelector('.reset');
        wrong.play();
        reset.addEventListener('click',resetGame);                         
    }
}


function resetGame()
{
    i=0;
    randomNumber=0;
    range=10;
    min=1;
    startGame();
}