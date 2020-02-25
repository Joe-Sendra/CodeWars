// https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript
function getCount(str) {
  var vowelsCount = 0;
  str.split('').forEach(letter => {
    if (letter === 'a'
      || letter === 'e'
      || letter === 'i'
      || letter === 'o'
      || letter === 'u') {
      vowelsCount++
    }
  });
  return vowelsCount;
}