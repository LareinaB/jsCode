function count(arr, item) {
    let count = arr.filter(function(e){
        return e === item;
    });
    return count.length;
}

function count1(arr, item) {
    let count = 0;
    for (let i = 0; i < arr.length; i ++){
        if(arr[i] != item){
            continue;
        }else{
            count ++;
        }
        return count;
    }
}

function count2(arr, item) {
    let count = 0;
    arr.forEach(function(e){
        e === item ? count ++ : 0;
    });
    return count;
}

