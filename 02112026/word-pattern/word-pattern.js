// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.
 

// Example 1:

// Input:
// const pattern = "abba";
// const s = "dog cat cat dog";


// Output: true

// Explanation:

// The bijection can be established as:

// 'a' maps to "dog".
// 'b' maps to "cat".
// Example 2:

// Input:
// const pattern = "abba";
// const s = "dog cat cat fish";


// Output: false

// Example 3:

// Input:
// const pattern = "aaaa";
// const s = "dog cat cat dog";


// Output: false

const pattern = "abba";
const s = "dog cat cat fish";
var wordPattern = function(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;

  const charToWord = new Map();
  const wordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];
  
    if (charToWord.has(char) && charToWord.get(char) !== word) return false;
    if (wordToChar.has(word) && wordToChar.get(word) !== char) return false;

    charToWord.set(char, word);
    wordToChar.set(word, char);
  }
  return true;
}

console.log(wordPattern(pattern, s));