/**
 * Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

/**
* @param {number} x
* @return {number}
*/
var reverse = function (x) {
    let rev = 0;
    while (x != 0) {
        let pop = x % 10;
        x = Number.parseInt(x / 10);
        rev = rev * 10 + pop;
    }
    return (rev > 2147483641 || rev < -2147483641) ? 0: rev;
};

let x = 123;
// let x = -123;
// let x = 1534236469;
let result = reverse(x);
console.log("result 1 is: ", result);