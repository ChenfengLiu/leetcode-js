/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s == null || s.length < 1) return '';

    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Number.parseInt((len - 1) / 2);
            end = i + Number.parseInt(len / 2);
        }
    }
    return s.substring(start, end + 1);
};

var expandAroundCenter = function (s, left, right) {
    let l = left, r = right;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    return r - l - 1;
}


/**
 * Test Code
 */
let s = 'babad';
const result1 = longestPalindrome(s);
console.log("result 1 is: ", result1);

let s2 = 'cbbd';
const result2 = longestPalindrome(s2);
console.log("result 2 is: ", result2);