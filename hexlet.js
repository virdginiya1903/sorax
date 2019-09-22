const text = "When  \n	you play a game of thrones you win or you die.";

// // BEGIN
console.log(text.substring(6, 17).trim().length);
// // END

// // Напишите функцию isPrime. Она принимает число и возвращает true, если число является простым, и false в ином случае.
// // Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя. Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.
// // Используйте цикл for и арифметические шорткаты.
// // isPrime(1);     // false
// // isPrime(7);     // true
// // isPrime(10);    // false

// // BEGIN (write your solution here)isPrime.js
const isPrime = num => {
  if (num === 1 || num <= 0) {
    return false;
  } else if (num !== 1) {
    for (let counter = 2; counter < num; counter++) {
      if (num % counter === 0) {
        return false;
      }
    }
    return true;
  }
};
// // END

// export default isPrime;

const isPalindrome = str => {
  const length = str.length;
  if (length < 2) {
    console.log(true);
    return true;
  }

  if (str.length >= 2) {
    const firstSymb = str[0];
    const lastSymb = str[length - 1];
    if (firstSymb !== lastSymb) {
      console.log(false);
      return false;
    }

    const shortStr = str.slice(1, length - 1);
    return isPalindrome(shortStr);
  }
};

isPalindrome("radar");
isPalindrome("rasr");

console.log("substr2");

const substr2 = (str, firstInd = 0, len = str.length) => {
  if (len < 0) {
    len = 1;
  }
  if (str.length === 0) {
    console.log("str.length === 0");
    console.log("");
    return "";
  }
  if (firstInd + len > str.length) {
    len = str.length - firstInd;
  }
  if (firstInd < 0) {
    firstInd = 0;
  }
  if (firstInd > str.length) {
    console.log("firstInd > str.length");
    console.log("");
    return "";
  }
  console.log("остальное");

  console.log(str.slice(firstInd, len));
  return str.slice(firstInd, firstInd + len);
};
substr2("abba", 1, 0);
substr2("abba", 0, 1);
substr2("abba", 1, 2);
substr2("abba", -10, 2);
substr2("abba", -1, 100);
substr2("abba", -1, -1);
