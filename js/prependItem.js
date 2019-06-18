function prepend(arr, item) {
    // 这个会改变原数组
    arr.unshift(item);
}

function prepend1(arr, item) {
    return [item].concat(arr);
}

function prepend2(arr, item) {
    let newArr = arr.slice(0);
    newArr.unshift(item);
    return newArr;
}

function curtai(arr) {
    return arr.slice(1);
}

function curtai1(arr) {
    let newArr = arr.slice(0);
    newArr.shift();
    return newArr;
}

function insert(arr, item, index) {
    let newArr = arr.slice(0);
    newArr.splice(index, 0, item);
    return newArr;
}