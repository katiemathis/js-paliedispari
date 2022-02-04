//definisci variabili


document.getElementById('palindromo').addEventListener('click', playPalindromo);
document.getElementById('pari-dispari').addEventListener('click', playPariDispari);

let userParola = document.getElementById('user-parola');
let risultatoPalindromo = document.getElementById('risultato-palindromo');
let messaggioFinaleParola = document.getElementById('messaggio-finale-parola');

let userNumero = document.getElementById('user-numero');
let computerNumero = document.getElementById('computer-numero');
let messaggioFinaleNumero = document.getElementById('messaggio-finale-numero');


//funzione che crea un array di tutte le lettere singole per poi metterle in reverse:

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

//funzione per generare numero random 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    
};
 


//creare un evento click per iniziare il gioco del palindromo
function playPalindromo() {
    console.log('Lets go!');
    const parola = prompt('Inserisci una parola');
    userParola.innerHTML = 'Hai scritto la parola : ' + parola + '. È un palindromo?';
    
    console.log(parola);
    //crea una condizione per controllare se la parola è palindromo
    console.log(reverseString(parola));
    risultatoPalindromo.innerHTML = parola + '  scritto in reverse è : ' + reverseString(parola);

    if (parola == reverseString(parola)) {
        messaggioFinaleParola.innerHTML = 'Congratulazioni! La parola ' + parola + ' è un palindromo.'

    } else {
        messaggioFinaleParola.innerHTML = 'Mi dispiace. La parola ' + parola + ' non è un palindromo.'
    }
};


//creare un evento click per iniziare il gioco del pari dispari
function playPariDispari() {
    console.log('Lets go!');
    const numero = parseInt(prompt('Inserisci un numero da 1 a 5'));
    const pariDispari = prompt('Adesso il computer genera un numero random. La somma dei due numeri sarà pari o dispari? Scrivi "pari" o "dispari" per andare avanti.');
    console.log('user: ' + pariDispari)
    const pcNumero = parseInt(getRandomInt(1,5))
    userNumero.innerHTML = 'Hai scelto il numero: ' + numero;
    console.log('user: ' + numero);
    computerNumero.innerHTML = 'Il computer ha scelto il numero: ' + pcNumero;
    console.log('computer: ' + pcNumero);

    let somma = numero + pcNumero;


    
    

    //crea una condizione per controllare se il numero è pari o dispari
    //controlla che il numero non è NaN -- crea un alert se è NaN

    if (isNaN(numero)) {
        alert('Input non valido! Premi di nuovo il bottone per provare di nuovo.');
    } else if (somma % 2 == 0 && pariDispari == 'pari') {
        messaggioFinaleNumero.innerHTML = 'Congratulazioni! Hai vinto! La somma dei due numeri è pari.'
    } else if (somma % 2 != 0 && pariDispari == 'dispari') {
        messaggioFinaleNumero.innerHTML = 'Congratulazioni! Hai vinto! La somma dei due numeri è dispari.'
    } else {
        messaggioFinaleNumero.innerHTML = 'Mi dispiace, hai perso. Il computer ha vinto questa volta. Premi di nuovo il bottone per la rivincita!'
    }

};