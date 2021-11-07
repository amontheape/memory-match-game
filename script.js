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

document.querySelector("button").classList.toggle("hidden");

cardNumber = parseInt(prompt("Insira um número de cartas par entre 4 e 14: "));

    while ( !breakCondition ) {

        if (cardNumber === NaN){
            cardNumber = parseInt(prompt("Você um caracter inválido\n" + "Insira um número de cartas par entre 4 e 14: "));
        } else if ((cardNumber % 2) !== 0){
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
let moves = 0, matches = 0;

function flip(event) {
    const element = event.currentTarget;

     element.classList.add("selected");
    
    moves++;

    if ((moves % 2) === 0){  

        if ( element.classList.contains(currentCard)) {
            document.querySelectorAll(`.${currentCard}`).forEach((card)=> card.removeEventListener("click", flip));

            matches++;

            winCondition(matches, moves);
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
}

function winCondition(matches, moves) {
    if (matches === (cardNumber/2)) {
        setTimeout(() => {
            alert(`Congrats champ, you've won in ${moves} moves`)
        }, 1000);

    } else {
        currentCard = null;
    }
}

function compare() {
    return Math.random() - 0.5;
}

