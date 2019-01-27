/**
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

  let n = num1.length,
    m = num2.length;
  let result = new Array(m + n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      let mul = num1[i] * num2[j];
      let p1 = i + j,
        p2 = i + j + 1;
        console.log(p2);
      let sum = mul + result[p2];
      result[p1] += sum / 10 >>> 0;
      result[p2] = sum % 10;
    }
  }

  return result.join('').replace(/^0+(?!$)/, '');
};

// let num1 = '123',
//   num2 = '456';
let num1 = "123456789",
  num2 = "987654321";

// let num1 = "10000000",
//   num2 = "0";

let result1 = multiply(num1, num2);
console.log("result 1 is: ", result1);