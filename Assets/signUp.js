const signupForm = document.querySelector ('form');
const resultContainer = document.getElementById('result');
const spinner = document.getElementById('spinner');

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

resultContainer.textContent = 'Account Successfully Created! Redirecting you to Home Page';
resultContainer.style.textAlign= 'center';
resultContainer.style.color= 'green';

setTimeout(function() {

    window.location.href = "index.html";
  
  }, 4000); // Delay for 3 seconds (3000 milliseconds) 
  
}


signupForm.addEventListener('submit', signupSubmission)

console.log(signupForm);
signupForm.reset();









