let cardNumber = 0;
let breakCondition = false;

const cardContent = [
    {
     cardID : "pair0",
     cardImg : "/images/pair-0.gif", 
     altText : "card id 0", 
    },

    {
     cardID : "pair1",
     cardImg : "/images/pair-1.gif", 
     altText : "card id 1", 
    },

    {
     cardID : "pair2",
     cardImg : "/images/pair-2.gif", 
     altText : "card id 2",
    },

    {
     cardID : "pair3",
     cardImg : "/images/pair-3.gif", 
     altText : "card id 3",
    },

    {
     cardID : "pair4",
     cardImg : "/images/pair-4.gif", 
     altText : "card id 4", 
    },

    {
     cardID : "pair5",
     cardImg : "/images/pair-5.gif", 
     altText : "card id 5", 
    },

    {
     cardID : "pair6",
     cardImg : "/images/pair-6.gif",
     altText : "card id 6", 
    },
];

function getEntry () {

document.querySelector("button").classList.add("hidden");

cardNumber = parseInt(prompt("Insira um número de cartas par entre 4 e 14: "));

    while ( !breakCondition ) {

        if (cardNumber === NaN || cardNumber === null || cardNumber === undefined) {
            cardNumber = parseInt(prompt("Você um caracter inválido\n" + "Insira um número de cartas par entre 4 e 14: "));
        } else if ((cardNumber % 2) !== 0) {
            cardNumber = parseInt(prompt("Você digitou um número ímpar\n" + "Insira um número de cartas par entre 4 e 14: "));
        } else if (cardNumber < 4) {
            cardNumber = parseInt(prompt("Você digitou um número par menor que 4\n" + "Insira um número de cartas par entre 4 e 14: "));
        } else if (cardNumber > 14) {
            cardNumber = parseInt(prompt("Você digitou um número par maior que 14\n" + "Insira um número de cartas par entre 4 e 14: "));
        } else {
            breakCondition = true;
            cardFiller(cardNumber);
        }

    }

    timerStart();
}

function cardFiller (cardNumber) {

    const main = document.querySelector("main");

    let cardPool=[];

    for (let i = 0 ; i < cardNumber/2 ; i++ ) {

        cardPool[i] = cardContent[i];
        cardPool[cardNumber/2 + i] = cardContent[i];
        
    } 

    cardPool.sort(compare);

    cardPool.forEach((card)=> {
        main.innerHTML +=
        `<div class="card ${card.cardID}" data-identifier="card">

            <div class="front-face face" data-identifier="front-face">
                <img src="/images/front.png" alt="parrot image card cover"/>
            </div>

            <div class="back-face face" data-identifier="back-face">
                <img src=${card.cardImg} alt=${card.altText}/>
            </div>

        </div>`
    } );

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => card.addEventListener("click", flip));

}

let currentCard;
let stopper = false;
let moves = 0;

function flip(event) {

    if (stopper) return; 

    const element = event.currentTarget;

    element.classList.add("selected");
    
    moves++;

    if ((moves % 2) === 0) {  

        stopper = true;

        disableCards(); 

        if ( element.classList.contains(currentCard)) {

            stopper = false;

            enableCards();

            winCondition(moves);
        } else {
            setTimeout(flipReset, 1000, element);
        }
    } else {
        currentCard = element.classList.item(1);  
    }

}


function flipReset(element) {

    const previousCard = document.querySelector(`.${currentCard}.selected`);

    previousCard.classList.remove("selected");

    element.classList.remove("selected");
    
    currentCard = null;

    stopper = false;

    enableCards();
}

let playerChoice;

function winCondition(moves) {
    if ( document.querySelectorAll(".card.selected").length === (cardNumber)) {

        timerStop();

        setTimeout(() => {
            alert(`Você ganhou com ${moves} jogadas, em ${Math.floor(seconds / 60)}m e ${(seconds % 60).toFixed()}s`);
            playerChoice = prompt("Você gostaria de reiniciar o jogo? Digite 'sim' para reiniciar:");
            verifyChoice(playerChoice);
        }, 1000);

    } else {
        currentCard = null;
    }
}

function compare() {
    return Math.random() - 0.5;
}

function enableCards() {
    document.querySelectorAll(".card:not(.selected)").forEach((card)=> card.addEventListener("click", flip));
}

function disableCards() {
    document.querySelectorAll(".card").forEach((card)=> card.removeEventListener("click", flip));
}

let seconds = 0;
let clearKey;

function timerStart() {
    clearKey = setInterval(()=> {

        seconds++;

        if (seconds/60 < 10) {
            document.querySelector(".min").innerHTML=`0${Math.floor(seconds / 60)}`;
        } else {
            document.querySelector(".min").innerHTML=`${Math.floor(seconds / 60)}`;
        }

        if (seconds%60 < 10) {
            document.querySelector(".sec").innerHTML=`0${(seconds % 60).toFixed()}`;
        } else {
            document.querySelector(".sec").innerHTML=`${(seconds % 60).toFixed()}`;
        }
    }, 1000);
}

function timerStop() {
    clearInterval(clearKey);
}

function verifyChoice(playerChoice) {
    switch (playerChoice) {
        case 'sim':
        case 'SIM': 
        case 's':
        case 'S': return gameReset();
        default : break;
    }
}

function gameReset() {
    cardNumber = 0;
    breakCondition = false;
    moves = 0;
    seconds = 0;

    document.querySelector("main").innerHTML='';

    document.querySelector(".min").innerHTML='00';
    document.querySelector(".sec").innerHTML='00';

    document.querySelectorAll(".card").forEach((card)=> card.classList.remove("selected"));

    setTimeout(getEntry, 1000);
}