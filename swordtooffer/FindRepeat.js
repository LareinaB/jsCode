function findRepeat(target, array){
    let row = array.length;
    let col = array[0].length;
    for (let i = 0; i < row; i ++) {
        for (let j = col - 1; j >= 0; j --) {
            if(array[i][j] > target){
                continue;
            }else if(array[i][j] < target){
                break;
            }else{
                return true;
            }
        }
    }
    return false;
}

function findRepeat1(target, array){
    let row = array.length;
    let col = array[0].length;
    let i = row - 1;
    let j = 0;
    while (i >= 0 && j <= col - 1){
        if(array[i][j] > target){
            i --;
        }else if(array[i][j] < target){
            j ++;
        }else{
            return true;
        }
    }
    return false;
}




// let array = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
// let flag = findRepeat1(1, array);
// console.log(flag);

// let matches = pattern.exec(text);
// console.log(matches.index);
// console.log(matches[0]);
// console.log(matches.lastIndex);
// matches = pattern.exec(text);
// console.log(matches.index);
// console.log(matches[0]);
// console.log(matches.lastIndex);

// let text = "000-00-0000";
// let pattern = /\d{3}-\d{2}-\d{4}/;
// if(pattern.test(text)){
//     console.log("The pattern is matched.");
// }
