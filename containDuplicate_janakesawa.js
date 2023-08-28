/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * SEE EXAMPLE BELLOW!
 * 
 * 
Example
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

 * Determines if the array contains any duplicate value.

 * @param {number[]} nums - The input array of integers.
 * @return {boolean} Returns true if the array contains any duplicate value, false otherwise.
 */

function containsDuplicate(nums) {
  for (let x = 0; x < nums.length; x++) {
      if (nums.indexOf(nums[x]) !== nums.lastIndexOf(nums[x])) {
          return true;
      }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // Expected output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Expected output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Expected output: true
console.log(containsDuplicate([1, 7, 5, 9, 2, 9])); // Expected output: false