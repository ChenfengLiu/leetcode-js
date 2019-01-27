/**
 * Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let max = 0;
    for (i = 0; i < s.length - 1; i++) {
        let obj = {};
        obj[s[i]] = i;
        let j = i + 1;
        let m = 1;
        while (j < s.length) {
            console.log(obj);
            if (!obj.hasOwnProperty(s[j])) {
                obj[s[j]] = j;
                m++;
            } else {
                i = obj[s[j]];
                break;
            }
            j++;
        }
        max = Math.max(m, max);
    }
    return max;
};

var lengthOfLongestSubstring2 = function (s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let max = 1, i = 0, j = 1;
    let len = s.length;
    let obj = {};
    while(j < len) {
        var sub = s.slice(i, j);
        var k = sub.indexOf(s[j]);
        if (k !== -1) {
            i = i + k + 1;
        }
        j++;
        max = Math.max(j - i, max);
    }

    return max;
};

// let s = 'abcabcbb';
// let s = 'bbbbb';
let s = 'pwwwwwwkew';
// let s = 'au';
let result1 = lengthOfLongestSubstring(s);
console.log("result 1 is: ", result1);

let s2 = "abcbde";
let result2 = lengthOfLongestSubstring2(s2);
console.log("result 2 is: ", result2);