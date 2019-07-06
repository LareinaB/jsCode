var ary = [12,13,23,24,14,16,17];
// console.log(ary.sort((a, b) => a - b));

//=> 冒泡排序
/*当前项跟后一项比较，小的冒泡到前面
每一轮的最大值会放在最后面
比较ary.length-1次
*/
/*
*  bubble：实现冒泡排序
*  @parameter
*       ary：[array] 需要实现排序的数组
*  @return
*       [array] 排序后的数组（升序）
*  by team on 2019/07/05
 */
function bubble(ary) {
    // 外循环控制轮数
    for (let i = 0; i < ary.length - 1; i++) {
        // 每一轮不需要比较自己跟后面已经排好的值，
        // 内循环长度为ary.length - i- 1
        // 内层控制每一轮比较次数
        for (let j = 0; j < ary.length - i - 1; j++) {
            if(ary[j] > ary[j+1]){
                ary[j] = ary[j] + ary[j+1];
                ary[j+1] = ary[j] - ary[j+1];
                ary[j] = ary[j] - ary[j+1];
            }
        }
    }
    return ary;
}

console.log(bubble(ary));
function quick(ary){
    // 传递进来的数组只有一项或者空，就不继续进行
    if(ary.length <=1){
        return ary;
    }
    var currentIndex = Math.floor(ary.length / 2),
        currentValue = ary.splice(currentIndex, 1)[0];
    // 剩余数组的每一项都跟当前项比较
    var aryLeft = [],
        aryRight = [];
    for (let i = 0; i < ary.length; i++) {
        var cur = ary[i];
        cur < currentValue ? aryLeft.push(cur) : aryRight.push(cur);
    }
    return quick(aryLeft).concat(currentValue, quick(aryRight));
}
console.log(quick(ary));

function insert(ary) {
    // 先取第一个数
    var handAry = [];
    handAry.push(ary[0]);

    //一次循环抓取后面的牌
    for (let i = 1; i < ary.length; i++) {
        var item = ary[i]; // 当前抓的牌
        // 新抓的牌和手里现有的比较 从后往前比较
        for (let j = handAry.length - 1; j >= 0; j--) {
            // handAry[j] 手里当前的牌
            // 新抓的比当前比较的这张牌大，就放他后面
            if(item > handAry[j]){
                handAry.splice(j+1, 0, item);
                break;
            }
            // 新抓的牌是最小的，就放最前面
            if(j === 0){
                handAry.unshift(item);
            }
        }
    }
    return handAry;
}

console.log(insert(ary));
