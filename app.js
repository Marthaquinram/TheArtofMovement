'use strict'

function yourName(){
let name;
do{
    name = prompt('What is my name?');
    console.log('try again');
}
while (name !== 'martha')
return name;
}



function guessANumber(){
    let answer;
    do {
        answer = prompt('Guess a number between 1-10');
        if (answer != 7) {
            alert('try again!')
        }
        else {
            alert('you are correct!');
        }
    }
    while (answer != 7)
}


function timeofDay(){
    let time = prompt('What time is it?');
    let message = '';


if(time <= 11){
    message = 'Have A Good Morning!';
}
else if (time <= 18){
    message = 'Have A Good Afternoon!';
}
else if(time <= 24){
    message = 'Have A Good Evening!';
}
else {
    message = 'Time does not exist';
}



return message;

}

function displayRating(){
let output = '';
let rating = prompt('scale of 1-5, how many stars?');
    for(let i = 0; i < rating; i++){
        output = output + "<img class='star' src='star.webp'/>";

    }
    // how to resize photo?
    return document.write(output);
    
}

// function tellmeastory(){

//     return 'Waacking is my favorite style of dance!';
// }

guessANumber();
