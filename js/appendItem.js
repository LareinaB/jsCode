function append1(arr, item) {
    return arr.concat(item);
}

function append2(arr, item){
    let length = arr.length(),
    newArr = [];
    for (let i = 0; i < length; i ++) {
        newArr.push(arr[i]);
    }
    newArr.push(item);
    return newArr;
}

function append3(arr, item) {
    let newArr = arr.slice(0);
    newArr.push(item);
    return newArr;
}