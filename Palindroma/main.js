/* Palindroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */


// Creo la costante che contiene il valore input dell'utente
const user_word = prompt("Inserisci una parola e ti dirò se è palindroma");


// Creo la funzione per invertire i caratteri di una parola 
function checkPalindrom(word) {


    return word == word.split('').reverse().join('');

}

// Richiamo la funzione e imposto come argomento la costante precendentemente creata
checkPalindrom(user_word)


// Creo un condizionale per verificare se la parola inserita dall'utente è palindroma o no
if (checkPalindrom(user_word)) {
    console.log('La parola è palindroma');

} else {
    console.log('La parola non è palindroma');

}