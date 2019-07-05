function sum() {
    var total = null;
    for (let i = 0; i < arguments.length; i++) {
        var cur = arguments[i];
        !isNaN(cur) ? total += cur : null;
    }
    return total;
    //此处不是把total这个变量返回，而是返回total中存储的值 <=> 60
}
sum(10, 20, 30);
