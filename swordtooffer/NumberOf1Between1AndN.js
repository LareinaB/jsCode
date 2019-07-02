function NumberOf1Between1AndN_Solution(n) {
    var total_1 = 0,
        num = 1;
    if(n < 1) return 0;
    // 个十百千万 逐位
    while(num <= n){
        // 当前位和更高一位
        var curNum = parseInt((n / num)) % 10,
            higherNum = parseInt(n / (num * 10));
        total_1 += higherNum * num;

        if(curNum === 1){
            total_1 += n % num + 1;
        } else if (curNum > 1) {
            total_1 += num;
        }
        num *= 10;
    }
    return total_1;
}

console.log(NumberOf1Between1AndN_Solution(20));
