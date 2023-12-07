let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  let sum = (words) => words.length >= 5;
  return words.filter(sum);
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
