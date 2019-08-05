var codeBox = document.getElementById('codeBox');

// 生成四位随机不重复验证码 不分大小写 0-9 a-z A-Z
// var reg = /^[0-9][a-z][A-Z]{4}$/;

function queryCode() {
    var rangeStr = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

    var result = '';
    for (let i = 0; i < 4; i++) {
        // 随机获取4个0-61之间的整数作为索引
        var curIndex = Math.round(Math.random() * 61),
            // 根据索引获取一个字符
            curStr = rangeStr[curIndex];
        if(result.toLowerCase().indexOf(curStr.toLowerCase()) > -1){
            i --;
            continue;
        }
        // 每次循环把获取的字符放在result中
        result += curStr;
    }
    codeBox.innerHTML = result;
}

// 加载页面的时候执行
queryCode();

// 点击盒子的时候也执行  不加小括号只是绑定到元素的点击事件上，点击的时候才执行，浏览器会默认执行
codeBox.onclick = queryCode;
