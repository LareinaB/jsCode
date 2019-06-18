function minNumberInRotateArray(rotateArray) {
    if(rotateArray.length <= 0){
        return 0;
    }
    let index1 = 0,
        index2 = rotateArray.length - 1,
        midInd = index1;
    while (rotateArray[index1] >= rotateArray[index2]){
        if(index2 - index1 === 1){
            midInd = index2;
            break;
        }
        midInd = Math.floor((index1 +index2) / 2);
        //若三个下标指向的熟都一样，只能顺序查找
        if(rotateArray[index1] === rotateArray[index2] && rotateArray[index1] === rotateArray[midInd]){
            return minInOrder(rotateArray);
        }else{
            if(rotateArray[midInd] >= rotateArray[index1]){
                index1 = midInd;
            }else if(rotateArray[midInd] <= rotateArray[index2]){
                index2 = midInd;
            }
        }
    }
    return rotateArray[midInd];
}
function minInOrder(array) {
    let temp = array[0];
    for (let i = 0; i < array.length; i++) {
        if(temp > array[i]){
            temp = array[i];
        }
    }
    return temp;
}

let arr = [6501,6828,6963,7036,7422,7674,8146,8468,8704,8717,9170,9359,9719,9895,9896,9913,9962,154,293,334,492,1323,1479,1539,1727,1870,1943,2383,2392,2996,3282,3812,3903,4465,4605,4665,4772,4828,5142,5437,5448,5668,5706,5725,6300,6335];
console.log(minNumberInRotateArray(arr));

const person = {
    age : 20,
    name: 'tom'
};

person.name = 'jerry';

// 语法错误
person = {
    name: 'jerry'
};



