function findLongestWord(str) {
    var arr = str.split(" ");
    var maxLength = 0,
        maxWord = arr[0];

//循环判断每个字符的长度大小，把最大长度赋值给maxLength
    for(var i =0;i<arr.length;i++){
        if(arr[i].length > maxLength){
            maxLength = arr[i].length;
            maxWord = arr[i];
        }
    }
    return {maxWord, maxLength};
}

var str = 'i love suoyebang very much';
console.log(findLongestWord(str));