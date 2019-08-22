String.prototype.myURLQueryParametersByString = function () {
    var parameterIndex = this.indexOf('?') + 1,
        parameterStr = this.substring(parameterIndex);

    // 根据&分隔每组参数
    var ary = parameterStr.split('&');
    var obj = {};
    for (let i = 0; i < ary.length; i++) {
        var cur = ary[i];
        // 再根据等号分隔键值
        var curAry = cur.split('=');
        obj[curAry[0]] = curAry[1];
    }
    return obj;
};

String.prototype.myURLQueryParametersByReg = function () {
    var obj  = {},
        reg = /([^?=&]+)=([^?=&]+)/g;
    this.replace(reg, function () {
        obj[arguments[1]] = arguments[2];
    });
    return obj;
};

function QueryParametersByElement(url){
    var link = document.createElement('a');
    link.href = 'url';
    var search = link.search(),
        obj = {};
    if(search.length === 0)
        return;
    search = search.substr(1).split(/&|=/g);
    for (let i = 0; i < search.length; i += 2) {
        obj[obj[i]] = obj[i+1];
    }
    link = null;
    return obj;
}