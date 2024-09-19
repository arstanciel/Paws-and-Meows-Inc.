const signupForm = document.querySelector ('form');
const resultContainer = document.getElementById('result');
console.log(signupForm);
function signupSubmission (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


localStorage.setItem('fullName', fullName);
localStorage.setItem('email', email);
localStorage.setItem('password', password);

signupForm.reset();

resultContainer.textContent = 'Account Successfully Created!';
resultContainer.style.textAlign= 'center';
resultContainer.style.color= 'green';
}
signupForm.addEventListener('submit', signupSubmission)
console.log(signupForm);

window.onload = function() {
    const storedFullName = localStorage.getItem('fullName');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedFullName && storedEmail && storedPassword) {
        resultContainer.textContent = `Welcome back ${storedFullName}`
    }
}