// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    const index = new Map();
    let i = 0;
    // k equals the difference between target and the value in the array
    while (i<nums.length){
        let k = target - nums[i];
        //checks to see if k is in set
        if(index.has(k)){
            // in set returns index at k and current index
            return [index.get(k), i];
        } else {
            // otherwise it adds current value in array to map at index i
            index.set(nums[i], i);
        }
        i++;
    }
    return [];
};

var testArr = [3, 2, 4];
var test = 6;

console.log(twoSum(testArr, test));

// // two pointers
// var twoSum = function (nums, target) {
//     let len = nums.length, i;

//     while (i < nums.length){
//         k = nums[i]
//     }

// };

// naive
var naiveTwoSum = function (nums, target) {
    // instatiate varibles
    var i, j, val, len = nums.length;
    //loop through array 
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            val = nums[i] + nums[j];
            // console.log(`i ${nums[i]}`);
            // console.log(`j ${nums[j]}`);
            if (val == target) {
                // console.log(`i: ${i}`);
                // console.log(`j: ${j}`);
                return [i, j];
            }
        }
    }
};