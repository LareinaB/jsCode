function truncate(arr) {
    return arr.slice(0, -1);
}

function truncate1(arr) {
    let newArr = arr.slice(0);
    newArr.pop();
    return newArr;
}