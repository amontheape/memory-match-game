let cardNumber = 0;
let breakCondition = false;

const cardContent = [
    `<div class="card" data-identifier="card">

        <div class="front-face face" data-identifier="front-face">
            <img src="/images/front.png" alt="parrot image card cover"/>
        </div>

        <div class="back-face face" data-identifier="back-face">
            <img src="/images/pair-0.gif" alt="card id 0"/>
        </div>

    </div>`,

    `<div class="card" data-identifier="card">

        <div class="front-face face" data-identifier="front-face">
            <img src="/images/front.png" alt="parrot image card cover"/>
        </div>

        <div class="back-face face" data-identifier="back-face">
            <img src="/images/pair-1.gif" alt="card id 1"/>
        </div>

    </div>`,

    `<div class="card" data-identifier="card">

        <div class="front-face face" data-identifier="front-face">
            <img src="/images/front.png" alt="parrot image card cover"/>
        </div>

        <div class="back-face face" data-identifier="back-face">
            <img src="/images/pair-2.gif" alt="card id 2"/>
        </div>

    </div>`,

    `<div class="card" data-identifier="card">

        <div class="front-face face" data-identifier="front-face">
            <img src="/images/front.png" alt="parrot image card cover"/>
        </div>

        <div class="back-face face" data-identifier="back-face">
            <img src="/images/pair-3.gif" alt="card id 3"/>
        </div>

    </div>`,

    `<div class="card" data-identifier="card">

        <div class="front-face face" data-identifier="front-face">
            <img src="/images/front.png" alt="parrot image card cover"/>
        </div>

        <div class="back-face face" data-identifier="back-face">
            <img src="/images/pair-4.gif" alt="card id 4"/>
        </div>

    </div>`,

    `<div class="card" data-identifier="card">

        <div class="front-face face" data-identifier="front-face">
            <img src="/images/front.png" alt="parrot image card cover"/>
        </div>

        <div class="back-face face" data-identifier="back-face">
            <img src="/images/pair-5.gif" alt="card id 5"/>
        </div>

    </div>`,

    `<div class="card" data-identifier="card">

        <div class="front-face face" data-identifier="front-face">
            <img src="/images/front.png" alt="parrot image card cover"/>
        </div>

        <div class="back-face face" data-identifier="back-face">
            <img src="/images/pair-6.gif" alt="card id 6"/>
        </div>

    </div>`
];

function getEntry () {

document.querySelector("button").classList.toggle("hidden");

cardNumber = parseInt(prompt("Insira um número de cartas par entre 4 e 14: "));

    while ( !breakCondition ) {

        if ((cardNumber % 2) !== 0){
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
    
    for (let i = 0; i< cardNumber ; i++) {

        main.innerHTML += cardPool[i];

    }

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => card.addEventListener("click", flip));
}

function flip(event) {
    event.target.parentNode.classList.toggle("selected"); 
}

// criar verificação de match das cartas e win condition

function compare() {
    return Math.random() - 0.5;
}

