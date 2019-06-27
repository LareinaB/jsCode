//s pattern
var len1,
    len2;
function match(s, pattern) {
    var p = 0,
        q = 0;
    len1 = s.length;
    len2 = pattern.length;
    return matchCore(s, pattern, p, q);
}

function matchCore(s, pattern, p, q) {
    // 两个都匹配到尾
    if (p === len1 && q === len2) {
        return true;
    }
    // pattern先到
    if(p !== len1 && q === len2){
        return false;
    }

    // pattern第二个是* 且两个第一个字符匹配 3种匹配模式
    // 若不匹配 模式后移两位
    if(pattern.charAt(q+1) === "*"){
        if(s.charAt(p) === pattern.charAt(q) || (pattern.charAt(q) === "." && p < len1)) {
            return matchCore(s, pattern, p, q + 2) // 匹配0个字符 模式后移两位
              || matchCore(s, pattern, p+1, q) // s中匹配多个 要一直右移1位
              || matchCore(s, pattern, p+1, q+2); //  匹配一个
        }else {
            return matchCore(s, pattern, p, q+2);
        }
    }
    // pattern第二个不是* 且两者第一个匹配 都后移一位 否则返回false
    if(s.charAt(p) === pattern.charAt(q) || (pattern.charAt(q) === "." && p < len1)){
        return matchCore(s, pattern, p+1, q+1);
    }
    return false;
}
module.exports = {
    match: match
};

function match1(s, pattern){
    var reg = new RegExp("^" + pattern + "$");
    return reg.test(s);
}

