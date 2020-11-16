/**
 * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
 *
 *  Developer notes:
 *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
 *
 * This is the API you will be using. The method will be GET.
 * https://ron-swanson-quotes.herokuapp.com/v2/quotes
 */

let button = document.querySelector('#button');
let quoteArea = document.querySelector('#quote');

async function getQuote() {
    try {
        let response = await axios('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      if(response){
        quoteArea.textContent = response.data;
        
      }

    } catch (error) {
        quoteArea.textContent = 'There has been an error!';
        console.log(error);
    }


}
button.addEventListener('click', getQuote);

