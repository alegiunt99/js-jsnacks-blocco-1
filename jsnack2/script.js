console.log("JS OK");

/* Crea un array vuoto. 

Chiedi per 6 volte all’utente di inserire un numero,

se è dispari inseriscilo nell’array.*/

//devo creare un array vuoto

const emptyArray = [];

console.log(emptyArray);

//devo far inserire 6 numeri all'utente

for (let i = 1; i < 7; i++){

    let numberSelected = parseInt(prompt('Inserisci un numero'));

    console.log(numberSelected);

    /*e da quei numeri inseriti dall'utente
    devo aggiungere all'array solo quelli dispari*/

    let numberDis = false;

    if (numberSelected % 2 === 1) {

        console.log('è dispari');
        console.log("lo aggiungo all'array");

        emptyArray.push(numberSelected);
        
        numberDis = true;
    }

    if (!numberDis) {
        console.log('è pari');
        console.log("NON lo aggiungo all'array");
    }


}



// a questo punto sono sicuro che ha inserito 6 numeri

// ora


