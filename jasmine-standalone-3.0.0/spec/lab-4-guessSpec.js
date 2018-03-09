describe("Test guessNum Function", function(){
    describe("guessNum Test to Pass", function(){
        it("should return 'You guessed it!!!!' for the correct number", function(){
            var testNum = 4; //secretGuess
            expect(guessNum(testNum)).toEqual("You guessed it!");
      });
    }); //end test to pass
    
    describe("guessNum Test to Fail", function(){
        it("should return 'Guess again.' any whole number between 1 and 10 (inclusive) except the correct answer", function(){
            var testNum = 2; 
            expect(guessNum(testNum)).toEqual("Guess again.");
        });
    });
    
    describe("guessNum Test to Fail", function(){
        it("should return 'Way off! Pick between 1 and 10.' if the value is out of range.", function(){
            var testNum = 11; 
            expect(guessNum(testNum)).toEqual("Way off! Pick between 1 and 10.");
        });
    });
    
    describe("guessNum Test to Fail", function(){
        it("should return 'A number was not input.' if the value entered is not a number.", function(){
            var testNum = "a"; 
            expect(guessNum(testNum)).toEqual("A number was not input.");
        });
    });
    
    describe("guessNum Test to Fail", function(){
        it("should return 'A value was not entered.' if it receives an empty string.", function(){
            var testNum = ""; 
            expect(guessNum(testNum)).toEqual("A value was not entered.");
        });
    });
    
    describe("guessNum Test to Fail", function(){
        it("should return 'Guess again.' if the value entered is 1", function(){
            var testNum = 1; 
            expect(guessNum(testNum)).toEqual("Guess again.");
        });
    });
    
    describe("guessNum Test to Fail", function(){
        it("should return 'Way off! Pick between 1 and 10.' if the value is out of range.", function(){
            var testNum = 0; 
            expect(guessNum(testNum)).toEqual("Way off! Pick between 1 and 10.");
        });
    });
    
    describe("guessNum Test to Fail", function(){
        it("should return 'Guess again.' if the value entered is 1", function(){
            var testNum = 10; 
            expect(guessNum(testNum)).toEqual("Guess again.");
        });
    });
    
  
  
  
});