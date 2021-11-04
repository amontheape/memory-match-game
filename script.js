let cardNumber = 0;

function getEntry () {

cardNumber = parseInt(prompt("Insira um número de cartas par entre 4 e 14: "));

    while ( true ) {

        if ((cardNumber % 2) !== 0){
            cardNumber = parseInt(prompt("Você digitou um número ímpar\n" + "Insira um número de cartas par entre 4 e 14: "));
        } else if (cardNumber < 4) {
            cardNumber = parseInt(prompt("Você digitou um número par menor que 4\n" + "Insira um número de cartas par entre 4 e 14: "));
        } else if (cardNumber > 14) {
            cardNumber = parseInt(prompt("Você digitou um número par maior que 14\n" + "Insira um número de cartas par entre 4 e 14: "));
        } else {
            break;
        }

    }

    cardFiller(cardNumber);
}

function cardFiller (value) {

    const main = document.querySelector(".fill-in");

    for (let i = 0 ; i < value ; i++ ) {

        main.innerHTML += `
        
        <div class="card" onclick="flip()">

            <div class="front-face face">
              Frente
            </div>

            <div class="back-face face">
              Verso
            </div>

          </div>` ; 

    }  

}

getEntry();


// criar função flip onclick

// criar verificação de match das cartas e win condition

// criar função random generator