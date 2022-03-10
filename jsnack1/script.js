console.log("JS OK")


/* In un array sono contenuti i nomi degli invitati 
alla festa del grande Gatsby 

chiedi all’utente il suo nome */

//comunicagli se può partecipare o no alla festa.

//creo un array con i nomi degli invitati



const nameInput = document.querySelector('#name-input');

const nameButton = document.querySelector('#name-button');

document.querySelector('#accepted').style.display = 'none';

document.querySelector('#not-accepted').style.display = 'none';

nameButton.addEventListener('click',
    function () {

        const nameUser = nameInput.value;

        console.log(nameUser);

        const invitedList = ['Nik', 'Daisy', 'Tom', 'Myrtle'];

        console.log(invitedList);

})