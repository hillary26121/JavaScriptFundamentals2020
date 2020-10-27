/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 * 
 * @example console.log( document.querySelector("#myTarget") );
 * 
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 * 
 * Do not change the HTML unless you are instructed to do so.
 */

 let firstListItem = document.querySelector("#myId");
 console.log(firstListItem);

 let allListItems = document.querySelectorAll(".bg-warning");
 console.log(allListItems);

 let targetedCells = document.querySelectorAll(".bg-success > div.col");
 console.log(targetedCells);

 let targetedButtonLink = document.querySelectorAll("[data-target]");
//  let targetedButtonLinkArray = [...target];
 console.log(targetedButtonLink); 

