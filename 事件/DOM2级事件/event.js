/**
 * 处理DOM2级事件绑定的兼容性（绑定方法）
 * @param cueEle 要绑定事件的元素
 * @param eventType 要绑定的事件类型(click,mouseover)
 * @param eventFn 要绑定的方法
 */
function bind(curEle, eventType, eventFn) {
    if ("addEventListener" in document) {
        curEle.addEventListener(eventType, eventFn, false);
        return;
    }

    // 1、解决this是window的问题
    // 会有多个要绑定的方法，因此不能只用一个变量，而是要用数组
    // 在化妆前，还要把化妆前的样子贴在脑门上
    var tempFn = function () {
        eventFn.call(curEle);
    };
    tempFn.photo = eventFn;
    // 自定义属性解决，还需要加一步事件类型的区分
    if(!curEle["myBind"+eventType]){
        curEle["myBind"+eventType] = [];
    }
    // 2、解决重复问题，每次添加前先判断是否已经存在，有就不添加
    var ary = curEle["myBind"+eventType];
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i];
        if(cur.photo === eventFn){
            return;
        }
    }
    ary.push(tempFn);
    curEle.attachEvent("on" + eventType, tempFn);
}

/**
 * 移除绑定的方法
 * @param cueEle
 * @param eventType
 * @param eventFn
 */
function unbind(curEle, eventType, eventFn) {
    if ("addEventListener" in document) {
        curEle.removeEventListener(eventType, eventFn, false);
        return;
    }
    // 拿eventFn跟化妆后脑门上的照片对比，找到化妆后的eventFn
    var ary = curEle["myBind"+eventType];
    for (var i = 0; i < ary.length; i++) {
        if(ary[i].photo === eventFn){
            // 先把自己存储的容器中内容移除，再把事件池中对应的移除
            ary.splice(i ,1);
            curEle.detachEvent("on" + eventType, ary[i]);
            break;
        }
    }
}

// 解决顺序问题，自己模拟标准浏览器实现事件池
/**
 * 创建事件池，并把需要给当前元素绑定的方法依次增加到事件池中
 * @param curEle
 * @param eventType
 * @param eventFn
 */
function on(curEle, eventType, eventFn) {
    // 每个行为都有自己的事件池
    if(!curEle["myEvent"+eventType]){
        curEle["myEvent"+eventType] = [];
    }
    var ary= curEle["myEvent"+eventType];
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i];
        if(cur === eventFn){
            return;
        }
    }
    ary.push(eventFn);
    bind(curEle, eventType, run);

}

/**
 * 在事件池中把某一个方法移除
 * @param curEle
 * @param eventType
 * @param eventFn
 */
function off(curEle, eventType, eventFn) {
    var ary = curEle["myEvent"+eventType];
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i];
        if(cur === eventFn){
            ary.splice(i, 1);
            break;
        }

    }
}

// 之给当前元素绑定run方法，当触发点击的时候执行润方法，
// 在run方法中根据自己存储的方法顺序分别执行这些方法
function run(e) {
    // this 当前点击的元素 = e.target
    e = e || window.event;
    var flag = e.target ? true : false;

    if(!flag){
        e.target = e.srcElement;
        e.pageX = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
        e.pageY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
        e.preventDefault = function () {
            e.returnValue = false;
        };
        e.stopPropagation = function () {
            e.cancelBubble = true;
        };
    }
    // 获取自己的事件池中的所有方法
    var ary = this["myEvent"+e.type];
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i];
        cur.call(this, e);
    }
}