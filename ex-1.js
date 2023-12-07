let words = ["hello", "world"];

function getWordLengths(words) {
  let sum = (words) => words.length;
  return words.map(sum);
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
