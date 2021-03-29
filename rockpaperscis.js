const getUserChoice=userInput=>

{
  userInput.toLowerCase();
  if (userInput==='rock'|| userInput==='paper'|| userInput==='scissors'||userInput==='bomb')
  {
    return userInput;
  }
  else
  {
console.log("error");
  }

}
const getComputerChoice=()=>
{ 
 const randomNumber= Math.floor(Math.random()*3);

switch(randomNumber)
{
  case 0:
    return 'rock';
  case 1 :
     return 'paper';
  case 2:
    return 'scissors';
           
}
};
const determineWinner=(userChoice,computerChoice)=>{
  if(userChoice===computerChoice)
  {
    return 'game is tie';
  }
  if(userChoice==='rock')
  if(computerChoice==='paper')
  {
    return 'computer won';
  }
  if(userChoice==='bomb')
  {
    return'userr won'
  }
  else
  return 'you won';
}
const playGame=()=>{
  const userChoice=getUserChoice('rock');
  const computerChoice=getComputerChoice();
console.log(userChoice);
console.log(computerChoice);  
console.log(determineWinner(userChoice,computerChoice));
}
playGame();

