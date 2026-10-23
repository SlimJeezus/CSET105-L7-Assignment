var input = Number(window.prompt("Enter a Number to be multiplied"));
let first = document.body.getElementsByTagName("p")[0];
let second = document.body.getElementsByTagName("p")[1];
let third = document.body.getElementsByTagName("p")[2];
let fourth = document.body.getElementsByTagName("p")[3];
let fifth = document.body.getElementsByTagName("p")[4];
let sixth = document.body.getElementsByTagName("p")[5];
let seventh = document.body.getElementsByTagName("p")[6];
let eighth = document.body.getElementsByTagName("p")[7];
let ninth = document.body.getElementsByTagName("p")[8];
let tenth = document.body.getElementsByTagName("p")[9];

first.textContent = (input + " * 1 = " + input*1);
second.textContent = (input + " * 2 = " + input*2);
third.textContent = (input + " * 3 = " + input*3);
fourth.textContent = (input + " * 4 = " + input*4);
fifth.textContent = (input + " * 5 = " + input*5);
sixth.textContent = (input + " * 6 = " + input*6);
seventh.textContent = (input + " * 7 = " + input*7);
eighth.textContent = (input + " * 8 = " + input*8);
ninth.textContent = (input + " * 9 = " + input*9);
tenth.textContent = (input + " * 10 = " + input*10);


let button1 = document.createElement("button")
let selectedButton = button1
button1.textContent = 'button1';
button1.id = 'dynamic-btn';
let randomNumber = Math.floor(Math.random() * 3) + 1; 
if (randomNumber == 1){
    button1.classList.add("one");
}
else if (randomNumber == 2){
    button1.classList.add("two");
}
else if (randomNumber == 3){
    button1.classList.add("three");
}
document.body.appendChild(button1);
button1.addEventListener("click", () => {
    selectedButton = button1
});

let button2 = document.createElement("button");
button2.textContent = 'button2';
button2.id = 'dynamic-btn2';
randomNumber = Math.floor(Math.random() * 3) + 1; 
if (randomNumber == 1){
    button2.classList.add("one");
}
else if (randomNumber == 2){
    button2.classList.add("two");
}
else if (randomNumber == 3){
    button2.classList.add("three");
}
document.body.appendChild(button2);
button2.addEventListener("click", () => {
    selectedButton = button2;
});

let button3 = document.createElement("button");
button3.textContent = 'button3';
button3.id = 'dynamic-btn3';
randomNumber = Math.floor(Math.random() * 3) + 1; 
if (randomNumber == 1){
    button3.classList.add("one");
}
else if (randomNumber == 2){
    button3.classList.add("two");
}
else if (randomNumber == 3){
    button3.classList.add("three");
}
document.body.appendChild(button3);
button3.addEventListener("click", () => {
    selectedButton = button3;
});

let button4 = document.createElement("button");
button4.textContent = 'button4';
button4.id = 'dynamic-btn4';
randomNumber = Math.floor(Math.random() * 3) + 1; 
if (randomNumber == 1){
    button4.classList.add("one");
}
else if (randomNumber == 2){
    button4.classList.add("two");
}
else if (randomNumber == 3){
    button4.classList.add("three");
}
document.body.appendChild(button4);
button4.addEventListener("click", () => {
    selectedButton = button4;
});

let button5 = document.createElement("button");
button5.textContent = 'button5';
button5.id = 'dynamic-btn5';
randomNumber = Math.floor(Math.random() * 3) + 1; 
if (randomNumber == 1){
    button5.classList.add("one");
}
else if (randomNumber == 2){
    button5.classList.add("two");
}
else if (randomNumber == 3){
    button5.classList.add("three");
}
document.body.appendChild(button5);
button5.addEventListener("click", () => {
    selectedButton = button5;
});

let button6 = document.createElement("button");
button6.textContent = 'button6';
button6.id = 'dynamic-btn6';
randomNumber = Math.floor(Math.random() * 3) + 1; 
if (randomNumber == 1){
    button6.classList.add("one");
}
else if (randomNumber == 2){
    button6.classList.add("two");
}
else if (randomNumber == 3){
    button6.classList.add("three");
}
document.body.appendChild(button6);
button6.addEventListener("click", () => {
    selectedButton = button6;
});

let button7 = document.createElement("button");
button7.textContent = 'button7';
button7.id = 'dynamic-btn7';
randomNumber = Math.floor(Math.random() * 3) + 1; 
if (randomNumber == 1){
    button7.classList.add("one");
}
else if (randomNumber == 2){
    button7.classList.add("two");
}
else if (randomNumber == 3){
    button7.classList.add("three");
}
document.body.appendChild(button7);
button7.addEventListener("click", () => {
    selectedButton = button7;
});

let button8 = document.createElement("button");
button8.textContent = 'button8';
button8.id = 'dynamic-btn8';
randomNumber = Math.floor(Math.random() * 3) + 1; 
if (randomNumber == 1){
    button8.classList.add("one");
}
else if (randomNumber == 2){
    button8.classList.add("two");
}
else if (randomNumber == 3){
    button8.classList.add("three");
}
document.body.appendChild(button8);
button8.addEventListener("click", () => {
    selectedButton = button8;
});

let button9 = document.createElement("button");
button9.textContent = 'button9';
button9.id = 'dynamic-btn9';
randomNumber = Math.floor(Math.random() * 3) + 1; 
if (randomNumber == 1){
    button9.classList.add("one");
}
else if (randomNumber == 2){
    button9.classList.add("two");
}
else if (randomNumber == 3){
    button9.classList.add("three");
}
document.body.appendChild(button9);
button9.addEventListener("click", () => {
    selectedButton = button9;
});

let button10 = document.createElement("button");
button10.textContent = 'button10';
button10.id = 'dynamic-btn10';
randomNumber = Math.floor(Math.random() * 3) + 1; 
if (randomNumber == 1){
    button10.classList.add("one");
}
else if (randomNumber == 2){
    button10.classList.add("two");
}
else if (randomNumber == 3){
    button10.classList.add("three");
}
document.body.appendChild(button10);
button10.addEventListener("click", () => {
    selectedButton = button10;
});




function colorchange(selectElement){
    const selectedValue = selectElement.value

    selectedButton.classList.remove("one", "two", "three");

    if (selectedValue === "red"){
        selectedButton.classList.add("one")
    }
    else if (selectedValue === "green"){
        selectedButton.classList.add("two")
    }
    else if (selectedValue === "blue"){
        selectedButton.classList.add("three")
    }
    else if (selectedValue === "random"){
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber == 1){
            selectedButton.classList.add("one");
        }
        else if (randomNumber == 2){
            selectedButton.classList.add("two");
        }
        else if (randomNumber == 3){
            selectedButton.classList.add("three");
        }
    }
    selectElement.value = "";
}