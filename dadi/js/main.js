const numeroCasualeUtente = Math.floor((Math.random() * 6)) + 1;
console.log(numeroCasualeUtente);

const numeroCasuale = Math.floor((Math.random() * 6)) + 1;
console.log(numeroCasuale);

if (numeroCasuale > numeroCasualeUtente) {
    console.log('hai perso');
} else if (numeroCasuale < numeroCasualeUtente) {
    console.log('hai vinto');
} else {
    console.log('pareggio');
}