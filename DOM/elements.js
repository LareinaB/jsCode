// 兼容版的获取当前元素的上一个兄弟元素节点
function prevEle(curEle) {
    var p = curEle.previousSibling;
    while(p && p.nodeType !== 1){
        p = p.previousSibling;
    }
    return p;
}

// 下一个兄弟元素节点
function nextEle(curEle) {
    var p = curEle.nextSibling;
    while(p && p.nodeType !== 1){
        p = p.nextSibling;
    }
    return p;
}

function prevAll(curEle) {
    var p = curEle.previousSibling,
        prevSiblings = [];
    while(p && p.nodeType !== 1){
        prevSiblings.push(p);
        p = p.previousSibling;
    }
    return prevSiblings;
}

function nextAll(curEle) {
    var p = curEle.previousSibling,
        nextSiblings = [];
    while(p && p.nodeType !== 1){
        nextSiblings.push(p);
        p = p.nextSibling;
    }
    return nextSiblings;
}

function siblings(curEle) {
    return this.prevAll(curEle).concat(this.nextAll(curEle));
}

function index(curEle) {
    return this.prevAll(curEle).length + 1;
}

//=> 扩展
// prevAll 获取前面所有兄弟元素节点
// nextAll 获取后面所有兄弟元素节点
// siblings 获取所有兄弟兄弟元素节点
// index 获取当前元素在兄弟节点中的排名
