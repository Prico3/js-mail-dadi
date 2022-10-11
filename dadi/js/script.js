
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const userNumber = (Math.floor(Math.random() * 6)) + 1;
const pcNumber = (Math.floor(Math.random() * 6)) + 1;

console.log(userNumber, pcNumber);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let higherResult = "";
if (userNumber > pcNumber){
    higherResult = "Hai vinto"
} else {
    higherResult = "Hai perso"
}

console.log(higherResult);


// Output
document.getElementById("user").innerHTML = "I tuo numero è " + userNumber;
document.getElementById("pc").innerHTML = "Il numero del pc è " + pcNumber;
document.getElementById("result").innerHTML = higherResult;

function refreshPage() {
    var x = document.getElementById("myBtn");
    window.location.reload();
    
  }