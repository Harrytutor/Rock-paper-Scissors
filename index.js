let playerScore = 0;
let compScore = 0;

function getComputerChoice(){
    const ranNumber = Math.floor(Math.random()*3);
    const arrOfChoice = ['rock', 'paper', 'scissors'];
    const compPlay = arrOfChoice[ranNumber];
    return compPlay;
}
function playRound(playSelection, computerSelection){
    if (playSelection==='rock' && computerSelection==='rock'
    ||
    playSelection==='paper' && computerSelection==='paper'
    ||
    playSelection==='scissors' && computerSelection==='scissors'){
        return 'What a fair game! You drew with the computer!'
    } else if(playSelection==='rock' && computerSelection==='paper'
    ||
    playSelection==='scissors' && computerSelection==='paper'
    ||
    playSelection==='scissors' && computerSelection==='rock'){
        playerScore++;
        return 'You are a fucking genius! You just beat the computer! Kudos!'
    } else if(playSelection==='paper' && computerSelection==='rock'
    ||
    playSelection==='paper' && computerSelection==='scissors'
    ||
    playSelection==='rock' && computerSelection==='scissors'){
        compScore++;
        return 'Well, I don\'t know if disgrace is the right word but you just got beaten by the computer! Try hard next time!'
    }

}

const playSelection = prompt('Enter your choice', 'rock paper scissors').toLowerCase().trim();
const computerSelection = getComputerChoice();


function game() {
    for(let i=0;i<5;i++){
        console.log(playRound(playSelection, computerSelection));
    }
     if(playerScore > compScore){
       return 'You are a fucking genius! You just beat the computer! Kudos!'
    } else if(playerScore < compScore){
         return 'Well, I don\'t know if disgrace is the right word but you just got beaten by the computer! Try hard next time!'
     }else{
        return 'What a fair game! You drew with the       computer!'
    }
}
game();
