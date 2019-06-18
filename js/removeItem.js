function remove1(arr, item) {
    return arr.filter(function (x) {
        return x !== item;
    });
}

function removeOnArr(arr, item) {
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === item){
            arr.splice(i, 1);
            i --;
        }
    }
    return arr;
}

function remove3(arr, item){
    let a = [];
    arr.forEach(function(val){
       if(val !== item) {
           a.push(val);
       }
    });
    return a;
}

function remove4(arr, item){
    let a = [];
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] !== item) {
            a.push(arr[i]);
        }
    }
    return a;
}

let arr = [1, 2, 3, 4, 2];
let item = 2;
console.log(removeOnArr(arr, item));
