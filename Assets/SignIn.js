const signupForm = document.querySelector ('form');
const resultContainer = document.getElementById('result');
console.log(signupForm);
// function signInSubmission (event) {
//     event.preventDefault();

//     const fullName = document.getElementById('fullname').value;
// const Inemail = document.getElementById('email').value;
// const Inpassword = document.getElementById('password').value;

// localStorage.setItem('fullName', fullName);
// localStorage.setItem('email', email);
// localStorage.setItem('password', password);

// signupForm.reset();

// resultContainer.textContent = 'Account Successfully Created!';
// resultContainer.style.textAlign= 'center';
// resultContainer.style.color= 'green';
    
    let Inemail = '';
    let Inpassword = '';

    const storedFullName = localStorage.getItem('fullName');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

const signinForm = function(event) {
    event.preventDefault();
    Inemail = document.getElementById('email').value;
    Inpassword = document.getElementById('password').value;
    resultContainer.style.textAlign= 'center';
    

    if(storedEmail === Inemail && storedPassword === Inpassword) {
    resultContainer.textContent = `Welcome back ${storedFullName}`;
    resultContainer.style.color= 'green';
    signupForm.reset();
    return;
         }
    else {
        resultContainer.textContent = `Your email or password maybe incorrect`;
        resultContainer.style.color= 'red';
    };
signupForm.reset();
    }
    
signupForm.addEventListener('submit', signinForm)


console.log(Inemail);





// resultContainer.textContent = `Welcome back ${storedFullName}
// window.onload = function() {
// const storedFullName = localStorage.getItem('fullName');
// const storedEmail = localStorage.getItem('email');
// const storedPassword = localStorage.getItem('password');

// if (storedFullName && storedEmail && storedPassword) {
// resultContainer.textContent = `Welcome back ${storedFullName}`
// }
// }