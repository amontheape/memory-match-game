let cardNumber = 0;
let breakCondition = false;

function getEntry () {

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

    const main = document.querySelector(".fill-in");

    for (let i = 0 ; i < cardNumber ; i++ ) {

        main.innerHTML += `
        
        <div class="card">

            <div class="front-face face">
              Frente
            </div>

            <div class="back-face face">
              Verso
            </div>

          </div>` ; 

    } 
    
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => card.addEventListener("click", flip));
}

const cardContent = [];

function flip(event) {
    event.target.parentNode.classList.toggle("selected"); 
}

// criar verificação de match das cartas e win condition

function randomKey () {
    return Math.random() - 0.5;
}



