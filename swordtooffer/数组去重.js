//-> 利用对象的键值对方法：
//1）把数组中当前项当作对象的属性名和属性值存储起来
//2）每次存储之前判断对象中有无当前项N，若有就把这一项删除
// undefined说明没有出现过，继续1）
var ary = [1,2,3,4,2,1,4,3,2,1,2,1,4,5,4,4];
var obj = {};
for (let i = 0; i < ary.length; i ++){
    var cur = ary[i];
    if(obj[cur] === cur){
        //splice删除当前项后面每一项的索引都改了，若后面有1千万项，耗性能
        //解决办法：用数组末尾一项替换当前项，删除最后一项
        //ary.splice(i,1);
        // i --;
        ary[i] = ary[ary.length - 1];
        ary.length --;
        // i--依然要  把最后一项拿过来还要再比较一次
        i --;
        continue;
    }
    obj[cur] = cur
}
console.log(ary);
