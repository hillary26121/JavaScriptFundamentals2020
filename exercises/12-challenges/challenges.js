/**
 * Return the length of the longest word in the provided sentence.
 *
 * @param {array} arr
 * @returns {number}
 *
 * @example findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6
 * @example findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8
 */
function findLongestWordLength(str) {
  let words = str.split(' ');
  let longestWord = 0;
  for(let i = 0; i < words.length; i++){
    if (words[i].length > longestWord){
      longestWord = words[i].length;
    }
  }
  return longestWord;
}

/**
 * Find the missing letter in the passed letter range and return it
 * @param {string} letters
 * @returns {string} returns the missing letter from the string
 * @example
 *   fearNotLetter("abce") should return "d".
 *   fearNotLetter("abcdefghjklmno") should return "i".
 *   fearNotLetter("stvwx") should return "u".
 *   fearNotLetter("bcdf") should return "e".
 *   fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 *
 */
function fearNotLetter(str) {
  // let letters = "abcdefghijklmnopqrstuvwxyz";
 if (str && 0 < str.length){
   let start = str.charCodeAt(0);
   for (let i = 1; i < str.length; i++){
    ++start;
    if (str.charCodeAt(i) != start){
      return String.fromCharCode(start);
    }
   } 
 }
  
  return str;
}
module.exports = {
  findLongestWordLength,
  fearNotLetter,
};
