/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
let twoSum = function (nums, target) {
    let t;
    for (let i = 0; i < nums.length; i++) {
        t = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (t == nums[j]) {
                return [i, j];
            }
        }
    }
    return [0, 0];
};

let twoSumMap = (nums, target) => {
    let t;
    let map1 = new Map();
    for (let i = 0; i < nums.length; i++) {
        t = target - nums[i];
        if (map1.has(t)) {
            return [map1.get(t), i];
        }
        map1.set(nums[i], i);
    }
    return [0, 0];
}

let twoSumObj = (nums, target) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(target - nums[i])) {
            return [obj[target - nums[i]], i];
        }
        obj[nums[i]] = i;
    }
    return [0, 0];
}

let twoSumObj2 = (nums, target) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (typeof(obj[target - nums[i]]) !== 'undefined') {
            return [obj[target - nums[i]], i];
        }
        obj[nums[i]] = i;
    }
    return [0, 0];
}

/**
 * Main Program
 */

let nums = [2, 7, 11, 15], target = 9;

const result1 = twoSum(nums, target);
console.log("result 1 is: ", result1);

const result2 = twoSumMap(nums, target);
console.log("result 2 is: ", result2);

const result3 = twoSumObj(nums, target);
console.log("result 3 is: ", result3);

const result4 = twoSumObj2(nums, target);
console.log("result 4 is: ", result4);