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
     // alert
    alert('Nicely done! Check the page for your results.');

    // results response
    const convertPercent = Math.round((correctGuesses / 3) * 100);
    // results.textContent = `Hey ${userName}, you got ${correctGuesses} right out of 3.`;

    if (correctGuesses === 0){
        results.textContent = `Eep ${userName}!, you got ${correctGuesses} out of 3. That's only ${convertPercent}%. Try again and remember I am lying about one of these things!`;
        results.style.borderColor = 'red';

    } else if (correctGuesses === 1){
        results.textContent = `Yikes ${userName}!, you only got ${correctGuesses} out of 3. That's only ${convertPercent}%. Try again and remember I am lying about one of these things!`;
        results.style.borderColor = 'orange';

    } else if (correctGuesses === 2){
        results.textContent = `So close ${userName}!, you got ${correctGuesses} out of 3. That's ${convertPercent}%. Try again and remember I am lying about one of these things!`;
        results.style.borderColor = 'yellow';

    } else if (correctGuesses === 3){
        results.textContent = `Great job ${userName}!, you got ${correctGuesses} out of 3. That's ${convertPercent}%.`;
        results.style.borderColor = 'green';
    }
    
});

// ran out of time to get the refresh button working.
// document.getElementById('playAgian').addEventListener('click', () => {
//   console.log('it worled');
//     window.location.reload();
// });
