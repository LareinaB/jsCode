var tabBox = document.getElementById('tabBox'),
    oList = tabBox.getElementsByTagName('li'),
    oDiv = tabBox.getElementsByTagName('div');

// 不管点击哪一个，都先移除所有的select，再给点击的那个加上select的className
function changeTab(index) {
    for(var i = 0; i < oList.length; i ++){
        oList[i].className = '';
        oDiv[i].className = '';
    }
    oList[index].className = oDiv[index].className = 'select';
}

for (let i = 0; i < oList.length; i++) {
    oList[i].onclick = function () {
        changeTab(i);
    };
}

// 绑定方法 绑定的时候没执行 点击的时候才执行
// for (let i = 0; i < oList.length; i++) {
//     oList[i].myIndex = i;
//     oList[i].onclick = function () {
//         changeTab(this.myIndex); // this就是当前点击的li
//     }
// }

// 闭包
// for (var i = 0; i < oList.length; i++) {
//     oList[i].onclick = function () {
//         // 自执行函数
//         return function () {
//             changeTab(i);
//         };
//     };
// }

//闭包
// for (var i = 0; i < oList.length; i++) {
//     ~function (i){
//         oList[i].onclick = function () {
//             changeTab(i);
//         }
//     }(i);
// }

// var preIndex = 0;
// for (var i = 0; i < oList.length; i++) {
//
//     oList[i].currentIndex = i;
//     oList[i].onclick = function () {
//         //上一个跟当前点击是同一个，后续处理不需要做
//         if(preIndex === this.currentIndex)
//             return;
//         // 先把上一个清除
//         oList[preIndex].className = oDiv[preIndex].className = null;
//         // 再让当前这个为select
//         this.className = oDiv[this.currentIndex].className = 'select';
//         // 更新下一次点击的上一个
//         preIndex = this.currentIndex;
//     }
// }
