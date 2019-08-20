var toCamel = function (str) {
    var index = str.indexOf('-');
    if(index > -1){
        // 从n开始 截取到m不包括m
        var str1 = str.replace(/-(\w)/g, function (a, b) {
            return b.toUpperCase();
        });
        return str1;
    }
};

toCamel = function (str) {
    var ary = str.split('-');
    var aryChange = ary.slice(1).map(function (item) {
       return item[0].toUpperCase().concat(item.slice(1));
    });
    return ary.slice(0,1).concat(aryChange).join('');
};

toCamel = function (str) {
    var ary = str.split('-');
    for (var i = 1, len = ary.length; i < len; i++) {
        ary[i] = ary[i].charAt(0).toUpperCase() + ary[i].slice(1);
    }
    return ary.join('');
};

console.log(toCamel("js-vue-webpack-learn"));