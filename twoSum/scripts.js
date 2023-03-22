/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* O^2 solution*/

var twoSum = function(nums, target) {

    let final=[];
    for(let i=0;i<nums.length;i++){
        let j=i+1;
        console.log(j,'j');
        while(j<nums.length){
            if(nums[i]+nums[j]===target){
                final.push(i);
                final.push(j);
                return final;
            }
            j++;
        }
    }

    
};
console.log(twoSum([2,7,11,15], 9));
