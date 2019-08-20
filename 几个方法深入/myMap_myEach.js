Array.prototype.myForeach = function (callback, context) {
    context = context || window;
    if('forEach' in Array.prototype){
        this.forEach(callback, context);
        return;
    }
    for (var i = 0, len = this.length; i < len; i++) {
        // 第二个context值是要改变的this指向
        callback && callback.call(context, this[i], i, this);
    }
};


Array.prototype.myMap = function (callback, context) {
    context = context || window;
    if('map' in Array.prototype){
        return this.map(callback, context);
    }
    var newAry = [];
    for (var i = 0, len = this.length; i < len; i++) {
        // 第二个context值是要改变的this指向
        var cur = callback && callback.call(context, this[i], i, this);
        newAry[newAry.length] = cur;
    }
    return newAry;
};


// var ary = [1,2,3,4,5];
// ary.myForeach(function(item){
//     console.log(item);
// });
//
// console.log(ary.myMap(function (item) {
//     console.log(item * 3);
// }));

function myBind(callback, context) {
    context = context || window;
    var outer = Array.prototype.slice.call(arguments, 2);
    return function () {
        var innerArg = Array.prototype.slice.call(arguments, 0);
        callback.apply(context, outer.concat(innerArg));
    }
}

var obj = {name: 'javascript'};
function fn(num1, num2) {
    console.log(this, num1, num2, arguments[2]);
}
// setTimeout(myBind(fn, obj, 100, 200), 1000);
// document.body.onclick = myBind(fn, obj, 100, 200);

Function.prototype.myBind = function (context) {
  var outerArg = Array.prototype.slice.call(arguments, 1);
  var _this = this;

  if('bind' in Function.prototype){
      return this.bind.apply(this, [].concat.apply(context, outerArg));
  }

  return function () {
      // 默认传递的点击事件
      var innerArg = Array.prototype.slice.call(arguments, 0);
      innerArg.length === 0 ? innerArg[innerArg.length] = window.event :null;
      _this.apply(context, outerArg.concat(innerArg));
  };
};
document.body.onclick = fn.myBind(obj, 100, 200);