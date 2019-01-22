/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 * The solution set must not contain duplicate triplets.
 * Example:
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */

/**
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function (nums) {
    let number = [];
    let numberStr = [];
    nums = nums.sort();
    for (let i = 0; i < nums.length - 2; i++) {
        let obj = {};
        let target = 0 - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (typeof (obj[target - nums[j]]) !== 'undefined' && !numberStr.includes(`${nums[i]} ${target - nums[j]} ${nums[j]}`)) {
                number.push([nums[i], target - nums[j], nums[j]]);
                numberStr.push(`${nums[i]} ${target - nums[j]} ${nums[j]}`);
            }
            obj[nums[j]] = j;
        }
    }
    return number;
};

var threeSum2 = function (nums) {
    if (nums.length < 3) return [];
    let number = [];
    let numberStr = [];
    nums = nums.sort();

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) return number;
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        let obj = {};
        let target = 0 - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (typeof (obj[target - nums[j]]) !== 'undefined' && !numberStr.includes(`${nums[i]} ${target - nums[j]} ${nums[j]}`)) {
                number.push([nums[i], target - nums[j], nums[j]]);
                numberStr.push(`${nums[i]} ${target - nums[j]} ${nums[j]}`);
            }
            obj[nums[j]] = j;
        }
    }
    return number;
};

var threeSum3 = function (nums) {
    if (nums.length < 3) return [];
    let number = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) return number;
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        for (var j = i + 1, k = nums.length - 1; j < k;) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                number.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] == nums[k + 1]) {
                    k--;
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return number;
};

// let nums = [-1, 0, 1, 2, -1, -4];
// let nums = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
const result1 = threeSum(nums);
// console.log("result 1 is: ", result1);

const result2 = threeSum2(nums);
// console.log("result 2 is: ", result2);

const result3 = threeSum3(nums);
console.log("result 3 is: ", result3);