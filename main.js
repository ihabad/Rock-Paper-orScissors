const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'Scissors' || userInput === 'bomb') {
  return userInput;
    } else {
    return 'Error! Please Type: rock, paper, scissors.';
    } 
  }
  
  const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
     case 0:
     return 'rock';
     case 1:
     return 'paper';
     case 2:
     return 'Scissors'
      }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This game is a tie!';
    }
    if (computerChoice === 'rock') {
      if (computerChoice === 'paper') {
      return "The computer won!";
    } else {
      return "You won!";
     }
    }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'Scissors') {
      return 'The computer Won!'
    } else {
      return 'You won!' ;
     }
  }
  
  if (userChoice === 'Scissors') {
    if (computerChoice === 'rock') {
      return 'The computer Won!'
    } else {
      return 'You won!' ;
      }
    }
    if(userChoice === 'bomb') {
      return 'Congratulations, you won!';
    }
  };
  
  console.log(determineWinner('paper', 'scissors')); // prints  'The computer won!'
  console.log(determineWinner('paper', 'paper')); // prints This game is a tie!
  console.log(determineWinner('paper', 'rock')); // prints 'you won!'
  
  const playGame = () => {
  const userChoice = getUserChoice('paper')
  const computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice}`);
  console.log(`The Computer threw: ` + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();