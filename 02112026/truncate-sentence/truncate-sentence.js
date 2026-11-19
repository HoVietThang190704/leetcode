// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

// Example 1:

// Input:
// const s = "Hello how are you Contestant";
// const k = 4;

// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how", "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".
// Example 2:

// Input:
// const s = "What is the solution to this problem";
// const k = 4;

// Output: "What is the solution"
// Explanation:
// The words in s are ["What", "is", "the", "solution", "to", "this", "problem"].
// The first 4 words are ["What", "is", "the", "solution"].
// Hence, you should return "What is the solution".
// Example 3:

// Input:
// const s = "chopper is not a tanuki";
// const k = 5;

// Output: "chopper is not a tanuki"

const s = "Hello how are you Contestant";
const k = 4;

var truncateSentence = function(s, k) {
  let spaceCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      spaceCount++;
      if (spaceCount === k) {
        return s.slice(0, i);
      }
    }
  }
  return s;
};

console.log(truncateSentence(s, k));