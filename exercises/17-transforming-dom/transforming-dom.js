/**
 * You will follow the instructions in the exercises/17-transforming-dom/transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
let myDiv = document.querySelector("div > .alert-danger");
myDiv.setAttribute("role", "alert");


let newDestination = document.querySelector("div > .alert-warning");
newDestination.setAttribute( 'href', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript');


let victoriousDiv = document.querySelector("div > .alert-success");
victoriousDiv.innerHTML= "I am victorious!";


let newColorDiv = document.querySelector("div > .alert-party");
newColorDiv.style.backgroundColor = "orange";


let hiddenDiv = document.querySelector("div > .hidden");

console.log(hiddenDiv);

let showDiv = document.querySelector('div > .hidden');
if (showDiv.matches('.hidden')){
    showDiv.style.display = "block";
}



// let blueThingy = document.querySelector("div > .text-dark ");
// let button = document.querySelector(".btn");
// if(button.classList.includes(".btn-primary")){
//     blueThingy.innerHTML = "Check Blue";
// }
document.querySelector("#conditionalOutput");
let blueButton = document.querySelector("#myButton");
if (blueButton.matches(".btn-primary") ){
document.querySelector("#other-text-dark").innerHTML = "Check Blue!";
}

