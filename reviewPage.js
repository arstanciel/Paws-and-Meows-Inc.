const signupForm = document.querySelector ('form');
const resultContainer = document.getElementById('result');
console.log(signupForm);
function signupSubmission (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const content = document.getElementById('content').value;


localStorage.setItem('fullName', fullName);
localStorage.setItem('email', email);
localStorage.setItem('content', content);

signupForm.reset();

resultContainer.textContent = 'Your review has been Submitted!';
resultContainer.style.textAlign= 'center';
resultContainer.style.color= 'green';
}

signupForm.reset();

signupForm.addEventListener('submit', signupSubmission)
// if(signupSubmission){
//     const redirectPage = function (url) {
//         redirectURL = url;
//         location.assign(url);
// };
// redirectPage('aboutUs.html');
// }

console.log(signupForm);
