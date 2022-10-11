// Mail
// Creo un array con mail a caso
const randomMail = ["paperino@gmail.com", "pluto@gmail.com", "minnie@gmail.com"]
console.log(randomMail);
// Chiedi all’utente la sua email,
const userMail = prompt("qual è la tua mail?");
console.log(userMail);
// controlla che sia nella lista di chi può accedere,
let isFound = false;

for (let i = 0; i < randomMail.length; i++){
    const checkMail = randomMail[i];

    if(checkMail === userMail){
        isFound = true;
    }
    console.log(userMail, checkMail, isFound);
}

// stampa un messaggio appropriato sull’esito del controllo.
if (isFound){
    alert("Perfetto puoi proseguire")
}else {
    alert("Ripensaci meglio")
}









// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?