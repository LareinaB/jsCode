function FindGreatestSumOfSubArray(array) {
    var curSum = array[0],
        maxSum = array[0];
    if(array.length === 0) return 0;
    for(let i = 1; i < array.length; i ++){
        curSum = curSum > 0 ? curSum + array[i] : array[i];
        // curSum = curSum < 0 ? array[i] : curSum + array[i];
        maxSum = maxSum > curSum ? maxSum : curSum;
    }
    return maxSum;
}

var ary = [6,-3,-2,7,-15,1,2,2];
console.log(FindGreatestSumOfSubArray(ary));
