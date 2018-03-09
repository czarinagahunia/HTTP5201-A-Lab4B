# HTTP5201-A-Lab4B
## Security and Quality Assurance Lab 4 - Part 2 - Test the Number Guesser
1. Create a Jasmine test suite to ensure that the provided function meets the provided specifications.
2. If any of the tests fail, fix the function and add a comment to indicate what you changed and why.

_guessNum() function found in lab-4-guess.js;_

### SPECIFICATION
**Test Suite for Guess a Number (1-10) function (guessNum)**
- The function should return _"You guessed it!"_ when the correct number is entered.
- The function should return _"Guess again."_ for any whole number between 1 and 10 (inclusive) except the correct answer.
- The function should return _"A number was not input."_ if the value entered is not a number.
- The function should return _"A value was not entered."_ if it receives an empty string.
- The function should return _"Guess again."_ if the value entered is 1.
- The function should return _"Way off! Pick between 1 and 10."_ if the value entered is 0.
- The function should return _"Guess again."_ if the value entered is 10.
- The function should return _"Way off! Pick between 1 and 10."_ if the value entered is 11.
