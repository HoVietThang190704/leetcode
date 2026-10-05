let s = 'rat';
let t = 'car';

var isAnagram = function(s, t) {
  s = s.replace(/\s/g, '').toLowerCase();
  t = t.replace(/\s/g, '').toLowerCase();
  if (s.length !== t.length) {
    return false;
  }
  s = s.split('').sort().join('');
  console.log(s);
  t = t.split('').sort().join('');
  console.log(t);
  return s === t;
}
console.log(isAnagram(s, t));