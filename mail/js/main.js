const customerEmail = ['andre@gmail.com', 'simone@gmail.com', 'paolo@gmail.com', 'daniele@gmail.com'];

const inputEmail = prompt('inserisci la tua email');

let notVerified = 'email non registrata';
console.log(notVerified)

for (let i = 0; i < customerEmail.length; i++) {
    
    if (inputEmail == customerEmail [i]) {
        notVerified = 'accesso effettuato'
        console.log('accesso effettuato')
    } 
}