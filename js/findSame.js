function duplicates(arr) {
    let newArr = [];
    arr.sort();

    for(let i = 0; i < arr.length; i ++){
        if((arr[i] === arr[i+1]) && (newArr.indexOf(arr[i]) === -1)){
            newArr.push(arr[i]);
            i ++;
        }
    }
    return newArr;
}

let arr = [1, 2, 6, 4, 5, 6, 7, 7, 9, 0, 2, 3, 5, 4, 6];
console.log(duplicates(arr));