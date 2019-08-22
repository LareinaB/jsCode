Array.prototype.every = function (fn) {
  let flag = true;
    for (var i = 0; i < this.length; i++) {
        flag = fn(this[i]);
        if(!flag){
            flag = false;
        }
    }
    return flag;
};

Array.prototype.some = function (fn) {
    for (var i = 0; i < this.length; i++) {
        let flag = fn(this[i]);
        // 有一个返回true就返回true
        if(flag){
           return flag;
        }
    }
    return false;
};