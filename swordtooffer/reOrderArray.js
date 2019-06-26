function reOrderArray(array) {
    var odd = [];
    var even = [];
    for(let i = 0; i < array.length; i ++){
        if((array[i] % 2)){
            odd.push(array[i])
        }else{
            even.push(array[i])
        }
    }
    return odd.concat(even)
}

console.log(reOrderArray([1, 2, 3, 4, 5, 6]));
