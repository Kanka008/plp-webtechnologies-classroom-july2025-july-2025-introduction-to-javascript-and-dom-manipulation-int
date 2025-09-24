//part 1
var button = document.querySelector("button");
var div = document.getElementById("changeMe");

function changeColor() {
    if (div.style.background == 'red'){
        div.style.background = 'black';
    }
    else{
        div.style.background = 'red'
    }

}
//part 2

let name = prompt('What is your name?')
const age = 21;

function greet(name){
    console.log(`hello`+ name)
}
function drinkingAge(age){
    if(age <= 18){
        console.log(`you are not allowed to drink`)
    } else{
        console.log(`You are permitted to drink`)
    }
}

greet(name);
drinkingAge(age);

//part 3

for (let i = 0; i<=5; i++){
    console.log("Number:", i);
}
let n = 0;
let x = 5;
while(x<10){
    n++;
    x+=n;
    console.log("x is now:", x);
}

//part 4

function changeText() {
  div.innerText = "You changed me!";
}

