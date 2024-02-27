//js functions
function greetings(name){
    console.log('Hello ' + name);
}

greetings('haridev');



//callback functions: functions inside a function
console.log(1);
setTimeout(() => {
    console.log(2);
} , 1000);
console.log(3);

