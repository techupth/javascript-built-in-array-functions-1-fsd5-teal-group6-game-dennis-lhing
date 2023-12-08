let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here;
  let letter = (count) => count.length;
  //function letter(count) {return count.length}
  return words.map(letter);
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
