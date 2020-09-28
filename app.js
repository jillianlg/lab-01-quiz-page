// import functions and grab DOM elements
import { makeItYes } from './make-it-yes.js';

// initialize state
const button = document.getElementById('promptButton');

const results = document.getElementById('view-results');

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const userName = prompt('Enter your name?');

    const userConfirmation = confirm('Do you really think you know me well enough to play?');

    if (!userConfirmation){
        alert('Awww. You didn\'t even try.');
    }
    console.log(userName);
});