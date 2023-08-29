/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */

function majorityElement(nums) {
    
    let maxFrequency = 0;
    let mostFrequent = -1;

    for (let index1 = 0; index1 < nums.length; index1 += 1) {
        
        let countFrequency = 0;

        for (let index2 = 0; index2 < nums.length; index2 += 1) {
            if (nums[index1] == nums[index2]) {
                countFrequency += 1;
            }
            if (maxFrequency < countFrequency) {
                maxFrequency = countFrequency;
                mostFrequent = nums[index1];
            } else if (countFrequency == maxFrequency) {
                mostFrequent = (mostFrequent, nums[index1]);
            }
        }
    } return mostFrequent;
}

// function majorityElement(nums) {
//     let occurence = {},                                         /** empty object to store value */
//     maxCount = 0,                                               /** declare variable */
//     maxValue = 0;
//     for (let index = 0; index < nums.length; index++) {         /** loop */
//         mode = nums[index];

//         if (!occurence.hasOwnProperty(mode)) {                  /** logic pt 1 check first occurence */
//             occurence[mode] = 1;
//         }
//         ++occurence[mode];

//         if (occurence[mode] > maxCount) {                       /** logic pt 2 check amount */
//             maxCount = occurence[mode];
//             maxValue = mode;
//         }
//     }
//     return maxValue;
// }


// function majorityElement(nums) {

//     const frequencyStore = {};
//     let maxElement = nums[0];
//     let maxCount = 1;

//     for (let index = 0; index < nums.length; index++) {

//         const element = nums[index];

//         if (frequencyStore[element]) {
//             frequencyStore[element]++;
//     }   else {
//             frequencyStore[element] = 1;
//     }
//         if (frequencyStore[element] > maxCount) {
//             maxElement = element;
//             maxCount = frequencyStore[element];
//         }
//     }
//     return maxElement;
// }

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 
console.log(majorityElement([5, 7, 5, 7, 3, 1]));
console.log(majorityElement(["ikan", "kerbau", "kambing", "ayam", "sapi", "ayam"]));

