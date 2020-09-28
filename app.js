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

    let correctGuesses = 0;

    // 3 yes or no questions
    const calArtsResponse = prompt(`Okay ${userName}! I was waited listed 3 times for one of two spots in the directing program at Cal Arts.`);

    //user is correct
    if (makeItYes(calArtsResponse)) {
      // track the STATE of their correct guesses
        correctGuesses++;
    }

    const sportsResponse = prompt(`Okay ${userName}! I have played in comptitive sports since childhood`);

    //user is correct
    if (!makeItYes(sportsResponse)) {
      // track the STATE of their correct guesses
        correctGuesses++;
    }

    const coffeeResponse = prompt(`Okay ${userName}! I earned my Coffee Masters certification while working as a barista.`);

    //user is correct
    if (makeItYes(coffeeResponse)) {
      // track the STATE of their correct guesses
        correctGuesses++;
    }

    // 1) Alert the user that the quiz is complete and their results will now be written to the webpage.
    alert('Nicely done! Check the page for your results');

    // 1) Write a response to the page with their name and number correct out of the total.
    results.textContent = `Hey ${userName}, you got ${correctGuesses} right out of 3.`;
});

