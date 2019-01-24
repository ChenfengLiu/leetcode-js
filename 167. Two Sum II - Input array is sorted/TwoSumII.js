setthe
/**
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
 *
 * Note:
 * Your returned answers (both index1 and index2) are not zero-based.
 * You may assume that each input would have exactly one solution and you may not use the same element twice.
 *
 * Example:
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 *
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  if (numbers.length < 2) return [];
  if (numbers[0] > target) return [];

  for (var j = 0, k = numbers.length - 1; j < k;) {
    if (numbers[j] + numbers[k] === target) {
      return [j + 1, k + 1];
    } else if (numbers[j] + numbers[k] > target) {
      k--;
    } else {
      j++;
    }
  }
};

var twoSum2 = function(numbers, target) {
  let j = 0,
    k = numbers.length - 1;
  while (j < k) {
    let s = numbers[j] + numbers[k];
    if (s > target) {
      k--;
    } else if (s < target) {
      j++;
    } else {
      return [j + 1, k + 1];
    }
  }
};






// let numbers = [2,13,11,7];
// let target = 9;
let numbers = [5, 25, 75];
let target = 100;
const result1 = twoSum(numbers, target);
console.log("result1 is: ", result1);

const result2 = twoSum2(numbers, target);
console.log("result2 is: ", result2);