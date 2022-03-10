console.log("JS OK")


/* In un array sono contenuti i nomi degli invitati 
alla festa del grande Gatsby 

chiedi all’utente il suo nome */

//comunicagli se può partecipare o no alla festa.

//creo un array con i nomi degli invitati



const nameInput = document.querySelector('#name-input');

const nameButton = document.querySelector('#name-button');



nameButton.addEventListener('click',
    function () {

        document.querySelector('#accepted').style.display = 'none';

        document.querySelector('#not-accepted').style.display = 'none';

        const nameUser = nameInput.value;

        console.log(nameUser);

        const invitedList = ['Nik', 'Daisy', 'Tom', 'Myrtle'];

        console.log(invitedList);

        let trovato = false; 

        for (let i = 0; i < invitedList.length; i++){

            // se il nome scritto è all'interno dell'array
            //ho trovato il nome
            if (nameUser === invitedList[i]) {
                console.log("l'utente è sulla lista")
                document.querySelector('#accepted').style.display = 'block';
                document.querySelector('#not-accepted').style.display = 'none';

                trovato = true;
            }
        }   

        if (!trovato) {
            console.log('non sei nella lista');
            document.querySelector('#not-accepted').style.display = 'block';
        }
})