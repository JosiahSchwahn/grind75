/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    let array = [1,1]
    for(let j = 2; j <= n; j++){
        array.push(array[j-1] + array[j-2]);
    }
    return array[n];


};

