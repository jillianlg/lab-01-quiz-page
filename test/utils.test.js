// IMPORT MODULES under test here:
import { makeItYes } from '../make-it-yes.js';

const test = QUnit.test;

test('makeItYes should take in a yes and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yes = 'yep';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeItYes(yes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('makeItYes should take in a no and return false', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const no = 'nope';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeItYes(no);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});