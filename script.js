let cardNumber, condition;

function getEntry () {

cardNumber = parseInt(prompt("Insira um número de cartas par entre 4 e 14: "));

    while ( !condition ) {

        if ((cardNumber % 2) !== 0){
            cardNumber = parseInt(prompt("Você digitou um número ímpar\n" + "Insira um número de cartas par entre 4 e 14: "));
            console.log(cardNumber);
        } else if (cardNumber < 4) {
            cardNumber = parseInt(prompt("Você digitou um número par menor que 4\n" + "Insira um número de cartas par entre 4 e 14: "));
            console.log(cardNumber);
        } else if (cardNumber > 14) {
            cardNumber = parseInt(prompt("Você digitou um número par maior que 14\n" + "Insira um número de cartas par entre 4 e 14: "));
            console.log(cardNumber);
        } else {
            condition = true;
            console.log(cardNumber);
        }

    }

    // chamar função de preenchimento;
}

getEntry();

// criar função de preenchimento com base no número de cartas escolhidas;

// criar função flip

// criar função random generator