

(function dogPictures() {
  let button = document.querySelector('#button'); 
  let picture = document.querySelector('#current-dog');
  picture.src = 'https://images.dog.ceo/breeds/borzoi/n02090622_4552.jpg';
  console.log(button);
  fetch('https://dog.ceo/api/breeds/image/random',{
    method: 'GET',

  })
  .then(response => response.json())
  .then(response =>{
    picture.src = response.message;
    console.log(response);
  
  });
  button.addEventListener('click', dogPictures);



})();





 /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use fetch in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */