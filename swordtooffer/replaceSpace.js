function replaceSpace(str)
{
    return str.replace(/\s/g, "%20");
}

function replaceSpace1(str){
    let newStr = '', i, len = str.length;
    for(i = 0; i < len; i ++){
        if(str[i] === ' '){
            newStr += '%20';
        }else{
            newStr += str[i];
        }
    }
    return newStr;

}
// console.log(replaceSpace1("We are happy"));

function compare(num1, num2){
    return num1 - num2;
}
let nums = [3, 1, 100, 40, 2];
nums.sort(compare);
console.log(nums);  //[ 1, 2, 3, 40, 100 ]