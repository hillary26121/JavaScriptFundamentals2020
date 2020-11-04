let dontClick = document.querySelector('#dont-click'); 
const clickedButton = (event) => { 
// if(dontClick.clicked === false){
//   dontClick.textContent = "Don't Click Me";
//   clickedDiv.style.display = 'none';
// }
   let clickedDiv = document.createElement('div');
   let divContent = document.createTextNode('Seriously? WHY DID YOU CLICK ME?');
   clickedDiv.appendChild(divContent);
   let buttonDiv = document.querySelector('#button-div');
   document.body.insertBefore(clickedDiv, buttonDiv);
   dontClick.textContent = "HEY!";

  console.log(dontClick);
 
};


dontClick.addEventListener('click', clickedButton);

//I did the best I could, I'm going to fix it and re-sumbit it better later. :)
