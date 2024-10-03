'use strict';


/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct Number'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
console.log(document.querySelector('.guess').value = 23) ; */

//handing click
// const x = function() {
//    console.log(23)
// }


let number1 = Math.trunc(Math.random()*20)+1;
let score = 20;
//  document.querySelector('.number').textContent = number1;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value)
    console.log(guess, typeof guess)
    //document.querySelector('.message').textContent = 'correct Number';

    if(!guess){
       document.querySelector('.message').textContent = 'No number'  
    }else if(guess === number1){
      document.querySelector('.message').textContent = "Correct Number";
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width ='30rem';
      document.querySelector('.number').textContent = number1;
    }
    else if(guess > number1){
      if(score > 1){
         document.querySelector('.message').textContent = "Too High";

         score--;
         document.querySelector(".score").textContent = score;
      } else{
         document.querySelector(".message") . textContent ="You lost the game";
         document.querySelector(".score").textContent = 0;
      } 
      
      
    }
    else if(guess < number1) {
     if(score > 1){
         document.querySelector('.message').textContent = "Too Low";

         score--;
         document.querySelector(".score").textContent = score;
      } else{
         document.querySelector(".message") . textContent ="You lost the game";
         document.querySelector(".score").textContent = 0;
      } 
      
    }
})
document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  number1 = Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent = 'start giessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width ='15rem';
})
