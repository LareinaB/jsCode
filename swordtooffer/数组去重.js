//-> 利用对象的键值对方法：
//1）把数组中当前项当作对象的属性名和属性值存储起来
//2）每次存储之前判断对象中有无当前项N，若有就把这一项删除
// undefined说明没有出现过，继续1）
// var ary = [1,2,3,4,2,1,4,3,2,1,2,1,4,5,4,4];
// var duplication;
// var obj = {};
// for (let i = 0; i < ary.length; i ++){
//     var cur = ary[i];
//     if(obj[cur] === cur){
//         //splice删除当前项后面每一项的索引都改了，若后面有1千万项，耗性能
//         //解决办法：用数组末尾一项替换当前项，删除最后一项
//         //ary.splice(i,1);
//         // i --;
//         duplication = cur;
//         ary[i] = ary[ary.length - 1];
//         ary.length --;
//         // i--依然要  把最后一项拿过来还要再比较一次
//         i --;
//         continue;
//     }
//     obj[cur] = cur
// }
// duplication = obj[1];
// console.log(ary);
// console.log(duplication);
function duplicate1(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    var obj = {};
    let flag = false;
    for(let i = 0; i < numbers.length; i ++){
        var cur = numbers[i];
        if(!obj[cur]){
            obj[cur] = 1;
        } else {
            obj[cur] ++;
        }
    }
    for(const key in obj){
        if(obj[key] > 1){
            flag = true;
            duplication[0] = key;
            break;
        }
    }
    return flag;
}
function duplicate2(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    var obj = {};
    let flag = false;
    for(let i = 0; i < numbers.length; i ++){
        var cur = numbers[i];
        if(!obj[cur]){
            obj[cur] = 1;
        } else {
            duplication[0] = cur;
            flag = true;
            break;
        }
    }
    return flag;
}

// 有问题
function duplicate3(numbers, duplication)
{
    for(var i = 0; i < numbers.length; i ++){
        while(i !== numbers[i]){
            if(numbers[i] === numbers[numbers[i]]){
                duplication[0] = numbers[i];
                return true;
            }
            [numbers[i], numbers[numbers[i]]] = [numbers[numbers[i]], numbers[i]] //交换
        }
    }
    return false;
}

function duplicate4(numbers, duplication)
{
    for(var i = 0; i < numbers.length; i ++){
        let index = numbers[i];
        if(index >= numbers.length){
            index -= numbers.length
        }
        if(numbers[index] >= numbers.length){
            duplication[0] = index;
            return true;
        }
        numbers[index] = numbers[index] + numbers.length
    }
    return false;
}

let duplication = [];
duplicate3([2,3,1,0,2,5,3], duplication);
console.log(duplication);
