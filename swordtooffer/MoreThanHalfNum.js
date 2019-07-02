function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    var obj = {};

    if(numbers.length < 0)
        return false;

    // for(let i = 0; i < numbers.length; i ++){
    //     if(obj[numbers[i]]){
    //         obj[numbers[i]] ++;
    //     } else {
    //         obj[numbers[i]] = 1;
    //     }
    //     obj[numbers[i]] ? obj[numbers[i]] ++ : obj[numbers[i]] = 1;
    // }

    numbers.forEach((value, index) => {
        if(obj[value]){
            obj[value] ++;
        }else{
            obj[value] = 1;
        }
    });

    for(var key in obj){
        if(obj[key] > numbers.length / 2){
            return + key;
        }
    }
    return false;

}


var ary = [1,2,3,2,2,2,5,4,2];
console.log(MoreThanHalfNum_Solution(ary));
