/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 */

/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/
var findMedianSortedArrays = function (nums1, nums2) {
    let len = nums1.length + nums2.length;
    let medianIndex = Math.floor(len / 2);
    let numOfMedians = (len % 2 == 0) ? 2 : 1;

    let i1 = 0, i2 = 0;
    let preIndex = 0;
    let isNums = 1;
    let preIndexNums = 1;
    while ((i1 + i2) !== medianIndex) {
        if (nums1[i1] >= nums2[i2]) {
            preIndex = i2;
            i2++;
            isNums = 2;
            preIndexNums = 2;
        } else {
            preIndex = i1;
            i1++;
            isNums = 1;
            preIndexNums = 1;
        }
    }

    return isNums === 1 ? nums1[i1] : nums2[i2];

  
};


let nums1 = [1, 3], nums2 = [2];
let result1 = findMedianSortedArrays(nums1, nums2);
console.log("result 1 is: ", result1);