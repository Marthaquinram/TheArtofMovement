'use strict'


let name = prompt('What day is it?');
let time = prompt ('What time is it?');
let message;

if(time <= 11){
    message= 'Have A Good Morning!';
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

document.write('Its ' + name + ' ! ' + message);