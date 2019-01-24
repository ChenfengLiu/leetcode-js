/**
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  let resultNode = new ListNode((l1.val + l2.val) % 10);
  let currentNode = resultNode;
  let carry = Math.floor((l1.val + l2.val) / 10);
  while (l1.next !== null && l2.next !== null) {
    l1 = l1.next;
    l2 = l2.next;

    currentNode.next = new ListNode((l1.val + l2.val + carry) % 10);
    carry = Math.floor((l1.val + l2.val + carry) / 10);
    currentNode = currentNode.next;
  }
  while (l1.next !== null) {
    l1 = l1.next;
    currentNode.next = new ListNode((l1.val + carry) % 10);
    carry = Math.floor((l1.val + carry) / 10);
    currentNode = currentNode.next;
  }
  while (l2.next !== null) {
    l2 = l2.next;
    currentNode.next = new ListNode((l2.val + carry) % 10);
    carry = Math.floor((l2.val + carry) / 10);
    currentNode = currentNode.next;
  }
  if (carry === 1) {
    currentNode.next = new ListNode(carry);
  }

  return resultNode;
};

var addTwoNumbers2 = function(l1, l2) {

  let resultNode = new ListNode(0);
  let currentNode = resultNode;
  let carry = 0;
  let sum = 0,
    currl1, currl2;

  while (l1 !== null || l2 !== null) {
    currl1 = (l1 === null) ? 0 : l1.val;
    currl2 = (l2 === null) ? 0 : l2.val;
    sum = currl1 + currl2 + carry;

    currentNode.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    currentNode = currentNode.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry === 1) {
    currentNode.next = new ListNode(carry);
  }

  return resultNode.next;
};


/**
 * Helper Functions
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
};

let constructNode = (arr) => {
  let resultNode = new ListNode(arr[0]);
  let currentNode = resultNode;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;
  }
  return resultNode;
};

let printNode = (node) => {
  let arr = [];
  if (node && node.val !== null) {
    arr.push(node.val);
  }
  while (node.next !== null) {
    node = node.next;
    arr.push(node.val);
  }
  return arr;
};


let arr1 = [2, 4, 3],
  arr2 = [5, 6, 4];

// let arr1 = [5],
//   arr2 = [5];

let n1 = constructNode(arr1);
let n2 = constructNode(arr2);
console.log(printNode(n1));
console.log(printNode(n2));

let r1 = addTwoNumbers(n1, n2);
console.log("result 1 is: ", printNode(r1));

let r2 = addTwoNumbers2(n1, n2);
console.log("result 2 is: ", printNode(r2));