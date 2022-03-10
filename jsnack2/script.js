console.log("JS OK");

/* Crea un array vuoto. 

Chiedi per 6 volte all’utente di inserire un numero,

se è dispari inseriscilo nell’array.*/

const emptyArray = [];

// controllo che l'utente scriva effettivamente dei numeri

while (emptyArray.length < 6){

    let numberSelected = parseInt(prompt("scrivi un numero"));

    if (!isNan(numberSelected)){
        
        if (numberSelected % 2 === 1) {
            emptyArray.push(numberSelected)

            console.log(numberSelected, 'è dispari');

            console.log("ho aggiunto un numero all'array");
        } else (numberSelected % 2 === 0); {

            console.log(numberSelected, 'è pari')

            console.log("ho aggiunto nessun numero all'array");
        }
    }
}