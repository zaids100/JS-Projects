const apiUrl="https://api.quotable.io/random";
const quote=document.getElementById("quote");
const author=document.getElementById('author');
const newQuote=document.querySelector(".new-btn");

async function getQuote(url){
    const response=await fetch(url);
    if(response.ok)
    {   
        let data=await response.json();
        quote.innerHTML=data.content;
        author.innerHTML=data.author;
    }
    else{
        quote.innerHTML="error cannot fetch quote";
    }
}


newQuote.addEventListener("click",function getNewQuote(){
    const pr=getQuote(apiUrl);
    console.log(pr);
});

