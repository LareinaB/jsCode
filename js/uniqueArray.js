// 数组去重
var ary = [1,2,3,4,5,6,3,2,1,4,6,3,5,8,4,2,2,8,3,9,5,8,7];
// 方案一 双重遍历
// for (let i = 0; i < ary.length -1 ; i++) {
//     var cur = ary[i];
//     // 拿出这一项和后面的每一项比
//     // for(let j = i + 1; j < ary.length; j ++){
//     //     if(cur === ary[j]){
//     //         // 若相等，删除当前项 会出现数组塌陷 当前项后面的索引都要向前提一位
//     //         ary.splice(j, 1);
//     //         j --;  // 先减一位，就不会跳过删除这一项的下一项
//     //     }
//     // }
//     for(let j = i + 1; j < ary.length;){
//         // 若相等，删除当前项 会出现数组塌陷 当前项后面的索引都要向前提一位
//         // 删除的时候不加，不删的时候再加
//        cur === ary[j]  ? ary.splice(j,1) : j ++;
//     }
// }

// 方案二 indexOf
// for (let i = 0; i < ary.length; i++) {
//     var cur = ary[i]; // 当前项  跟后面元素组成的新数组比较
//     var curNextAry = ary.slice(i + 1);
//     if(curNextAry.indexOf(cur) > -1){
//         ary.splice(i, 1);
//         i --;
//     }
// }

// 方案三 对象键值对方法
// var obj = {};
// for (let i = 0; i < ary.length; i++) {
//     if(typeof obj[ary[i]] === 'undefined'){
//         obj[ary[i]] = ary[i];
//     }else{
//         ary.splice(i,1);
//         i --;
//     }
// }

// 方案四 优化
// var obj = {};
// for (let i = 0; i < ary.length; i++) {
//     if(typeof obj[ary[i]] === 'undefined'){
//         obj[ary[i]] = ary[i];
//     }else{
//         ary[i] = ary[ary.length - 1];
//         ary.length --;
//         i --;  // 当前循环过了还得再循环一次
//     }
// }

// var obj = {};
// for (let i = 0; i < ary.length;) {
//     if(typeof obj[ary[i]] === 'undefined'){
//         obj[ary[i]] = ary[i];
//         i ++;
//     }else{
//         ary[i] = ary[ary.length - 1];
//         ary.length --;
//     }
// }
//console.log(ary);

// Array.prototype.myUnique = function () {
//   var obj = {};
//     for (let i = 0; i < this.length;) {
//         if(typeof obj[this[i]] === 'undefined'){
//             obj[this[i]] = this[i];
//             i ++;
//         }else {
//             this[i] = this[this.length - 1];
//             this.length --;
//         }
//     }
//     return this;
// };
//
// var newSet = new Set(ary);
// console.log(Array.from(newSet));
var newAry = [1,2,3,5,2,3,6].sort(function (a,b) {
    return a - b;
});
for (let i = 0; i < newAry.length; i++) {
    if(newAry[i] === newAry[i+1]){
        newAry.splice(i+1, 1);
        i --;
    }
}
console.log(newAry);
