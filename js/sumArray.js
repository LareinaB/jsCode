function sum1(arr){
    let sum = 0;
    if(arr != null){
        for(let i = 0; i < arr.length; i ++) {
            sum += arr[i];
        }
    }
    return sum;
}

function sum2(arr){
    let sum = 0;
    arr.forEach(function (val) {
        sum += val;
    });
    return sum;
}

function sum3(arr){
    return eval(arr.join('+'));
}

let arr = [1,2,3,4];


console.time("sort");
arr.sort();
console.timeEnd("sort");
console.log(sum1(arr));
