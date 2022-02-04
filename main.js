//definisci variabili


document.getElementById('palindromo').addEventListener('click', playPalindromo);
document.getElementById('pari-dispari').addEventListener('click', playPariDispari);

//creare un evento click per iniziare il gioco del palindromo

function playPalindromo() {
    console.log('Lets go!');
    const parola = prompt('Inserisci una parola');
    document.getElementById('user-parola').innerHTML = 'Hai scritto la parola : ' + parola + '. È un palindromo?';
    
    console.log(parola);

    //crea una condizione per controllare se la parola è palindromo

};


//creare un evento click per iniziare 
function playPariDispari() {
    console.log('Lets go!');
    const numero = prompt('Inserisci un numero da 1 a 5');
    document.getElementById('user-numero').innerHTML = 'Hai scelto il numero : ' + numero + '. È pari o dispari?';
    
    console.log(numero);

    //crea una condizione per controllare se il numero è pari o dispari

};