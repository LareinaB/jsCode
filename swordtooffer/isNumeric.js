function isNumeric(s)
{
    // write code here
    return ! isNaN(Number(s));
    // 判断非数值的一个方法
}

function isNumeric1(s){
    if(+s){
       return true
   }else{
       return false
   }
    // +号运算符作为一元运算符时 会对expression进行ToNumber()操作
}

function isNumeric2(s) {
    var reg = /^[+-]?\d*(\.\d*)?([eE][+-]?\d+)?/g;
    return s.match(reg)[0] === s;
}

console.log(isNumeric2("123.45e+6"));
