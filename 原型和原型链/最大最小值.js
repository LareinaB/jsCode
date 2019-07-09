var ary = [11, 25, 39, 10, 38, 9, 21, 17, 20, 30];
var maxNum, minNum;
// 1、先排序
// ary.sort((a, b) => a - b);
// maxNum = ary[ary.length - 1];
// minNum = ary[0];

// 2、假设法

// if(ary[0] < ary[1]){
//     minNum = ary[0];
//     maxNum = ary[1];
// }else{
//     minNum = ary[1];
//     maxNum = ary[0];
// }
// for (let i = 2; i < ary.length; i++) {
//     ary[i] <= minNum ? minNum = ary[i] : void 0;
//     ary[i] >= maxNum ? maxNum = ary[i] : void 0;
// }

//3、apply
// maxNum = Math.max.apply(null, ary);
// minNum = Math.min.apply(null, ary);

//4、数组解构
maxNum = Math.max(...ary);
minNum = Math.min(...ary);

console.log(minNum, maxNum);

// Function.prototype.call = function (parameter) {
//     // 1、让当前操作的函数执行
//     this();
//     // 2、让当前操作的this变为parameter
//     // this(当前要操作的函数fn2)中的this(fn2中的this)变为parameter
//     this.this = parameter
// };

function fn1(){
    alert(1);
}
function fn2(){
    alert(2);
}
fn2.call(fn1);   // fn2执行，fn2中的this变为fn1

// fn2.call执行(this()执行，此时的this已在上一步变为fn1)，
// 并让fn2.call中的this变为fn1
fn2.call.call(fn1);
Function.prototype.call(fn1);
Function.prototype.call.call(fn1);


function B(){
    A.call(this);   // 存了A中私有的
}
B.prototype = new A;  // A中私有公有都存在了
B.constructor = B;
// 新建一个方法删除第二次继承的父类中的私有属性
B.prototype.deletePrivate = function() {
    var pro = new A;
    for (var key in this) {
        if(pro.hasOwnProperty(key)){
            delete this[key];
        }
    }
};
B.prototype.deletePrivate();
