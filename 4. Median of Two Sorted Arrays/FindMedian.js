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
var findMedianSortedArrays = function (A, B) {
    let m = A.length;
    let n = B.length;
    if (m > n) { // to ensure m<=n
        let temp = A; A = B; B = temp;
        let tmp = m; m = n; n = tmp;
    }
    let iMin = 0, iMax = m, halfLen = Math.floor((m + n + 1) / 2);
    while (iMin <= iMax) {
        let i = Math.floor((iMin + iMax) / 2);
        let j = halfLen - i;
        if (i < iMax && B[j - 1] > A[i]) {
            iMin = i + 1; // i is too small
        }
        else if (i > iMin && A[i - 1] > B[j]) {
            iMax = i - 1; // i is too big
        }
        else { // i is perfect
            let maxLeft = 0;
            if (i == 0) { maxLeft = B[j - 1]; }
            else if (j == 0) { maxLeft = A[i - 1]; }
            else { maxLeft = Math.max(A[i - 1], B[j - 1]); }
            if ((m + n) % 2 == 1) { return maxLeft; }

            let minRight = 0;
            if (i == m) { minRight = B[j]; }
            else if (j == n) { minRight = A[i]; }
            else { minRight = Math.min(B[j], A[i]); }

            return (maxLeft + minRight) / 2;
        }
    }
    return 0;
};


let nums1 = [1, 3], nums2 = [2];
let result1 = findMedianSortedArrays(nums1, nums2);
console.log("result 1 is: ", result1);