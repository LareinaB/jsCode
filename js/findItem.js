function searchItem(arr, item){
    if(Array.prototype.indexOf()){
        return arr.indexOf(item)
    }else{
        for (let i = 0; i < arr.length; i ++ ) {
            if(arr[i] === item) {
                return i;
            }
        }
    }
    return -1;
    //为啥-1要最后
    //牛客不认let
}

let arr = [2,5,3,7,9,10];
let item = 10;

console.log(searchItem(arr, item));