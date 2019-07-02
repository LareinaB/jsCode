function GetLeastNumbers_Solution(input, k)
{
    // write code here
    if(k > input.length)
        return [];
    var ary = input.sort((x, y) => x - y);
    return ary.slice(0, k);
}

var ary = [4,5,1,6,2,7,3,8];
console.log(GetLeastNumbers_Solution(ary, 4));
