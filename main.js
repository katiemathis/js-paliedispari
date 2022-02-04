//definisci variabili


document.getElementById('palindromo').addEventListener('click', playPalindromo);
document.getElementById('pari-dispari').addEventListener('click', playPariDispari);

let userParola = document.getElementById('user-parola');
let risultatoPalindromo = document.getElementById('risultato-palindromo');
let messaggioFinale = document.getElementById('messaggio-finale');

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
        messaggioFinale.innerHTML = 'Congratulazioni! La parola ' + parola + ' è un palindromo.'

    } else {
        messaggioFinale.innerHTML = 'Mi dispiace. La parola ' + parola + ' non è un palindromo.'
    }




    
    

};


//creare un evento click per iniziare 
function playPariDispari() {
    console.log('Lets go!');
    const numero = parseInt(prompt('Inserisci un numero da 1 a 5'));
    document.getElementById('user-numero').innerHTML = 'Hai scelto il numero : ' + numero + '. È pari o dispari?';
    
    console.log(numero);

    //crea una condizione per controllare se il numero è pari o dispari
    //controlla che il numero non è NaN -- crea un alert se è NaN

};