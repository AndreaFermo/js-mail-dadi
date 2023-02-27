const customerEmail = ['andrea@gmail.com', 'simone@gmail.com', 'paolo@gmail.com', 'daniele@gmail.com'];

const domButton = document.getElementById('accessButton');

let access = document.getElementById('accessState');


domButton.addEventListener('click', 
    function () {
        let inputEmail = document.getElementById('email').value;

        let verify = false;

        for (let i = 0; i < customerEmail.length; i++) {
    
            if (inputEmail == customerEmail [i]) {
                verify = true;
            }; 
        };

        if (verify == true) {
            access.innerHTML = 'Benvento!'
            console.log('benvento');
        } else {
            access.innerHTML = 'Email non registrata!'
            console.log('registrati');
        };
    }
);


