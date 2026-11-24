// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input:
// const s = "egg";
// const t = "add";


// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input:
// const s = "f11";
// const t = "b23";


// Output: false

// Explanation:

// The strings s and t can not be made identical as '1' needs to be mapped to both '2' and '3'.

// Example 3:

// Input:
// const s = "paper";
// const t = "title";


// Output: true
const s = "egg";
const t = "add";
var isIsomorphic = function(s, t) {
  const mapS = new Map();
  const mapT = new Map();
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    if (!mapS.has(charS) && !mapT.has(charT)) {
      mapS.set(charS, charT);
      mapT.set(charT, charS);
    } else {
      if (mapS.get(charS) !== charT || mapT.get(charT) !== charS) {
        return false;
      }
    }
  }
  return true;
}
console.log(isIsomorphic(s, t));