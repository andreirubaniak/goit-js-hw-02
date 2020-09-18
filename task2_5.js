function checkForSpam(str) {
  'use strict';
  // Write code under this line
  //1.привести строку к нижнему регистру;
  str = str.toLowerCase();
  //2.условие с использованием includes(spam, sale)
  //if (str.includes('spam')) {str = str.includes('spam')} else if (str.includes('sale')) {str = str.includes('sale')} else {str = false};
  str = str.includes('spam') || str.includes('sale') || false;
  //3.return результат;
  return str;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
