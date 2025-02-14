/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */


// Creo il prompt per dire all'utente di scrivere pari o dispari
let user_choice = prompt('Scommetti se il numero che esce è pari o dispari');

// Creo il prompt per dire all'utente di inserire un numero da 1 a 5

let user_number = parseInt(prompt('Inserisci un numero compreso tra 1 e 5'));
console.log(user_number);

// Creo la funzione per generare il numero del computer
function randomNumber() {
    const randomNum = Math.floor(Math.random() * 5) + 1;
    return randomNum
}
