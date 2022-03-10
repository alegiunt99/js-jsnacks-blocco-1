console.log("JS OK");

/* Crea un array vuoto. 

Chiedi per 6 volte all’utente di inserire un numero,

se è dispari inseriscilo nell’array.*/

const emptyArray = [];

// controllo che l'utente scriva effettivamente dei numeri

while (emptyArray.length < 6) {

    console.log("l'array contiene:", emptyArray.length + "numeri");
    
    const selectedNumber = parseInt(prompt('inserisci un numero da 1 a 6'));

    console.log(selectedNumber);

    
}