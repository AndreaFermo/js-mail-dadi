const customerEmail = ['andre@gmail.com', 'simone@gmail.com', 'paolo@gmail.com', 'daniele@gmail.com'];

const inputEmail = prompt('inserisci la tua email');

let verify = false;

for (let i = 0; i < customerEmail.length; i++) {
    
    if (inputEmail == customerEmail [i]) {
        verify = true;
    } 
}

if (verify == true) {
    console.log('benvento');
} else {
    console.log('registrati');
}