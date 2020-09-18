function findLongestWord(string = '') {
  // Write code under this line
  // 1. перевести string в массив split();
  let words = string.split(' ');
  //2. создать переменную result
  let result = words[0];
  // 3. перебрать массив поэлементно for of || for;
  for (const word of words) {
    // 4. создать условие сравнения элементов массива, которое записывает самое длинное слово в result;
    if (word.length > result.length) {
      result = word;
    }
  }
  // 5. return result;
  return result;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
