function Power(base, exponent)
{
    // write code here
    var res = 1,
        curr = base,
        n;
    if(exponent > 0){
        n = exponent;
    }else if(exponent < 0) {
        if(base === 0){
            throw new Error("分母不能为0");
        }
        n = -exponent
    } else {
        return 1;
    }

    while(n !== 0){
        if((n & 1) === 1){
            res *= curr;
        }
        curr *= curr;  //翻倍
        n >>= 1;   // 右移一位 相当于除以2
    }
    return exponent >= 0 ? res : (1/res);
}

console.log(Power(2, 0));
