let dropdown = document.querySelector('#dropdown');
let photo = document.querySelector('#get-schwifty');


const getCharacter = () =>{
  axios({
    url: 'https://rickandmortyapi.com/api/character/',
    method: 'GET',
  })
  .then(response=>{
    console.log(response);
    // response.data.result.forEach( (character, index)=>{
    //   let option =  document.createElement('option');
    //   option.text = character[index].name;
    //   console.log(option);
    // });
    let option =  document.createElement('option');
    option.text = character[index].name;
    console.log(option);
  })
  .catch(error=>{
    console.log(error);
  });

};

dropdown.addEventListener('change', getCharacter() );
/**
 *
 * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
 *
 * For this exercise, use the API to populate the dropdown.
 * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
 *
 *
 * Create a list of characters using the API
 * This is the URL for the API you will be using. The method should be GET.
 * To get all characters use this
 * https://rickandmortyapi.com/documentation/#get-all-characters
 * To get an individual character use this:
 * https://rickandmortyapi.com/documentation/#get-a-single-character
 *
 * Use the AXIOS library to make AJAX requests.
 */
