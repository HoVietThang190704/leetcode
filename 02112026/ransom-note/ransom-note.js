// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input:
// const ransomNote = "a";
// const magazine = "b";

// Output: false
// Example 2:

// Input:
// const ransomNote = "aa";
// const magazine = "ab";

// Output: false
// Example 3:

// Input:
// const ransomNote = "aa";
// const magazine = "aab";

// Output: true
const ransomNote = "aa";
const magazine = "ab";
var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  const charCount = new Map();
  for (const char of magazine) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (const char of ransomNote) {
    const count = charCount.get(char);
    if (!count) {
      return false;
    }
    charCount.set(char, count - 1);
  }
  return true;
}
console.log(canConstruct(ransomNote, magazine));