var newsBox = document.getElementById('newsBox'),
    oList = newsBox.getElementsByTagName('li');

// 跟选项卡一个原理
for (var i = 0; i < oList.length; i++) {
    // if(i % 2 === 1){
    //     oList[i].className = 'c1';
    // }else{
    //     oList[i].className = 'c2';
    // }
    oList[i].myClassName = 'c' + (i % 2 + 1);
    oList[i].className = oList[i].myClassName;
    oList[i].onmouseover = function () {
        // this 操作的li
        this.className = 'hover';
    };
    oList[i].onmouseout = function () {
        // this 操作的li
        this.className = '';
    }
}

// for (let i = 0; i < oList.length; i++) {
//     // if(i % 2 === 1){
//     //     oList[i].className = 'c1';
//     // }else{
//     //     oList[i].className = 'c2';
//     // }
//     let myClassName = 'c' + (i % 2 + 1);
//     oList[i].className = myClassName;
//     oList[i].onmouseover = function () {
//         // this 操作的li
//         this.className = 'hover';
//     };
//     oList[i].onmouseout = function () {
//         // this 操作的li
//         this.className = myClassName;
//     }
// }
