// 使用惰性思想封装常用的方法，第一次就把兼容与否的结果存在flag里面，后面就不需要再进行判断了
var utils = (function () {
    var flag = "getComputedStyle" in window;

    // 这个作用域不销毁，flag这个变量就不销毁，flag值为false说明是在IE6-8下
    /**
     * @param curEle
     * @param tagName
     * @returns {Array}
     * @explain 获取curEle下所有元素子节点（兼容所有浏览器），若传了tagName，则进行二次筛选
     */
    function children(curEle, tagName) {
        var childElement = [];
        if (!flag) {
            var childNodes = curEle.childNodes;
            for (var i = 0; i < childNodes.length; i++) {
                var curNode = childNodes[i];
                curNode.nodeType === 1 ? childElement[childElement.length++] = childNodes[i] : null;
            }
        } else {
            childElement = [].slice.call(curEle.children);
        }
        if (typeof tagName === "string") {
            for (var i = 0; i < childElement.length; i++) {
                var curNode = childNodes[i];
                if (curNode.nodeName.toLowerCase() !== tagName.toLowerCase()) {
                    childElement.splice(i, 1);
                    i--;
                }
            }
        }
        return childElement;
    }

    /**
     * @param curEle
     * @returns {{left: *, top: *}}
     * @explain offsetParent（不同） 等同于JQ中的offset方法，获取元素距离body的偏移(左/上)
     */
    function offset(curEle) {
        var totalLeft = null, totalTop = null;
        totalLeft += curEle.offsetLeft;
        totalTop += curEle.offsetTop;
        while (curEle.offsetParent) {
            curEle = curEle.offsetParent;
            // 累加父级参照物的边框及偏移
            if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
                totalLeft += curEle.offsetLeft;
                totalTop += curEle.offsetTop;
            } else {
                totalLeft += curEle.clientLeft + curEle.offsetLeft;
                totalTop += curEle.clientTop + curEle.offsetTop;
            }
        }
        return {left: totalLeft, top: totalTop};
    }

    /**
     *
     * @param curEle
     * @param attr
     * @explain
     */
    function setCss(curEle, attr) {

    }

    /**
     * @param likeArray
     * @returns {Array}
     * @explain 类数组转数组，IE6-8下不允许直接使用数组原型上的方法
     */
    function listToArray(likeArray) {
        if (flag) {
            return [].slice.call(likeArray);
        }
        var ary = [];
        for (var i = 0; i < likeArray.length; i++) {
            ary[ary.length] = likeArray[i];
        }
        return ary;
    }

    /**
     * @param str
     * @returns {Object}
     * @explain JSON字符串转为JSON对象
     */
    function jsonParse(str) {
        return "JSON" in window ? JSON.parse(str) : eval("(" + str + ")");
    }

    /**
     * @param attr
     * @param value
     * @returns {*}
     * @explain 关于操作浏览器盒子模型的方法 只传递attr默认获取样式值 都传递则是设置
     */
    function win(attr, value) {
        if (typeof value === 'undefined') { // 没传value值
            return document.documentElement[attr] || document.body[attr];
        } else {
            document.documentElement[attr] = value;
            document.body[attr] = value;
        }
    }

    /**
     *
     * @param curEle
     * @returns {Node|*}
     * @explain 上一个兄弟元素节点
     */
    function prev(curEle) {
        if (flag) {
            return curEle.previousElementSibling;
        }
        var previous = curEle.previousSibling;
        while (previous.nodeType !== 1) {
            previous = previous.previousSibling;
        }
        return previous;
    }

    /**
     *
     * @param curEle
     * @returns {Node|*}
     * @explain 下一个兄弟元素节点
     */
    function next(curEle) {
        if (flag) {
            return curEle.nextElementSibling;
        }
        var next = curEle.nextSibling;
        while (previous.nodeType !== 1) {
            next = next.nextSibling;
        }
        return next;
    }

    /**
     *
     * @param curEle
     * @returns {Array}
     * @explain 前面所有兄弟元素节点
     */
    function prevAll(curEle) {
        var prevAry = [];
        var prev = this.prev(curEle);
        while (prev !== null) {
            prevAry.unshift(prev);
            prev = this.prev(prev);
        }
        return prevAry;
    }

    /**
     *
     * @param curEle
     * @returns {Array}
     * @explain 后面所有兄弟元素节点
     */
    function nextAll(curEle) {
        var netAry = [];
        var next = this.next(curEle);
        while (next !== null) {
            netAry.push(next);
            next = this.next(next);
        }
        return netAry;
    }

    /**
     *
     * @param curEle
     * @returns {Array}
     * @explain 相邻的两个元素节点
     */
    function sibling(curEle) {
        var prev = this.prev(curEle);
        var next = this.next(curEle);
        var sibling = [];
        prev ? sibling.push(prev) : null;
        next ? sibling.push(next) : null;
        return sibling;
    }

    /**
     *
     * @param curEle
     * @returns {Array.<T>}
     * @explain 所有的元素节点
     */
    function siblings(curEle) {
        return this.prevAll(curEle).concat(this.nextAll(curEle));
    }

    /**
     *
     * @param curEle
     * @returns {number}
     * @explain 当前元素索引
     */
    function index(curEle) {
        return this.prevAll(curEle).length;
    }

    /**
     *
     * @param curEle
     * @returns {null}
     * @explain 第一个元素子节点
     */
    function firstChild(curEle) {
        var chs = this.children(curEle);
        return chs.length ? chs[0] : null;
    }

    /**
     *
     * @param curEle
     * @returns {null}
     * @explain 最后一个元素子节点
     */
    function lastChild(curEle) {
        var chs = this.children(curEle);
        return chs.length ? chs[chs.length - 1] : null;
    }

    /**
     *
     * @param newEle
     * @param container
     * @explain 向容器末尾添加子元素节点 调用原生
     */
    function append(newEle, container) {
        container.appendChild(newEle);
    }

    /**
     *
     * @param newEle
     * @param container
     * @explain 向容器开头添加子元素节点 相当于向容器的第一个子元素节点前面增加
     * 若容器一个元素节点都没有，则直接加在后面即可
     */
    function prepend(newEle, container) {
        var fir = this.firstChild(container);
        if (fir) {
            container.insertBefore(newEle, fir);
            return;
        }
        container.appendChild(newEle);
    }

    /**
     *
     * @param newEle
     * @param oldEle
     * @explain 新元素加到指定元素前面 调用原生
     */
    function insertBefore(newEle, oldEle) {
        oldEle.parentNode.insertBefore(newEle, oldEle);
    }

    /**
     *
     * @param newEle
     * @param oldEle
     * @explain 新元素加到指定元素后面
     * 相当于追加到oldEle的下一个兄弟元素节点的前面
     * 没有下一个兄弟元素 说明当前是最后一个
     */
    function insertAfter(newEle, oldEle) {
        var next = this.next(oldEle);
        if (next) {
            this.insertBefore(newEle, next);
            return;
        }
        oldEle.parentNode.appendChild(newEle);
    }

    /**
     *
     * @param curEle
     * @param className
     * @returns {boolean}
     * @explain 是否存在样式类名，通过正则判断
     */
    function hasClass(curEle, className) {
        var reg = new RegExp("(^| +)" + className + "( +|$)");
        return reg.test(curEle.className);
    }

    /**
     *
     * @param curEle
     * @param className
     * @explain 增加样式类名 防止一次传递多个样式类名 做个循环
     */
    function addClass(curEle, className) {

        var ary = className.split(/ +/g);
        for (var i = 0; i < ary.length; i++) {
            if (!this.hasClass(curEle, ary[i])) {
                curEle.className += " " + ary[i];
            }
        }
    }

    /**
     *
     * @param curEle
     * @param className
     * @explain 删除样式类名 同样循环 每次要用空格代替
     */
    function removeClass(curEle, className) {
        var ary = className.split(/ +/g);
        for (var i = 0; i < ary.length; i++) {
            if (this.hasClass(curEle, ary[i])) {
                var reg = new RegExp("(^| +)" + ary[i] + "( +|$)", "g");
                curEle.className = curEle.className.replace(reg, " ");
            }
        }
    }

    /**
     *
     * @param className 可能是一个也可能是多个
     * @param context 不传值默认document
     * @returns {Array} 没有样式类名就返回空集合
     * @explain 只要包含样式类名的元素都能获取到 跟顺序和空格数量没有关系
     *
     */
    function getElementsByClass(strClass, context) {
        context = context || document;
        if(flag){
            return this.listToArray(context.getElementsByClassName(strClass));
        }
        var ary = [];
        var strClassAry = strClass.replace(/(^ +| +$)/g, "").split(/ +/g);

        var nodeList = context.getElementsByTagName("*");
        for (var i = 0; i < nodeList.length; i++) {
            var isOk = true;
            for (var j = 0; j < strClassAry.length; j++) {
                var reg = new RegExp("(^ +|)"+strClassAry[j]+"( +|$)", "g");
                if(! reg.test(nodeList[i].className)){
                    isOk = false;
                    break;
                }
            }
            if(isOk){
                ary[ary.length] = nodeList[i];
            }
        }
        return ary;
    }

    /**
     * @param curEle
     * @param attr
     * @returns {Number}
     * @explain 获取当前元素所有经过浏览器计算过的样式中attr对应的属性值
     */
    function getCss(curEle, attr) {
        var val = null, reg = null;
        if (flag) {
            val = window.getComputedStyle(curEle, null)[attr];
        } else { // IE6-8
            if (attr === 'opacity') {
                val = curEle.currentStyle['opacity'];
                reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
                val = reg.test(val) ? reg.exec(val)[1] / 100 : 1;
            } else {
                val = curEle.currentStyle[attr];
            }

        }
        reg = /^-?\d+(\.\d+)?(px|pt|rem|em)$/i;
        return reg.test(val) ? parseFloat(val) : val;
    }

    /**
     *
     * @param curEle
     * @param attr
     * @param value
     * @explain 设置样式值只能设置在行内通过curEle.style[attr]=value
     * 加单位，float，opacity兼容处理
     */
    function setCss(curEle, attr, value){
        if(attr === "opacity"){
            curEle["style"][attr] = value;
            curEle["style"]["filter"] = "alpha(opacity=" + value * 100 +")";
            return;
        }
        if(attr === "float"){
            curEle["style"]["cssFloat"] = value;
            curEle["style"]["styleFloat"] = value;
            return;
        }
        var reg = /^(width|height|top|bottom|left|right|((margin|padding)(Top|Bottom|Left|Right)?))$/;
        if(reg.test(attr)){
            if(! isNaN(value)){
                value = value + "px";
            }
        }
        curEle["style"][attr] = value;
    }

    /**
     *
     * @param curEle
     * @param options
     * @explain 批量设置样式
     */
    function setGroupCss(curEle, options) {
        options = options || 0;
        if(options.toString() !== "[object Object]"){
            return;
        }
        for (var key in options) {
            if(options.hasOwnProperty(key)){
                utils.setCss(curEle, key, options[key]);
            }
        }
    }

    /**
     *
     * @param curEle
     * @returns {*}
     * @explain 操作css 获取设置以及批量设置
     */
    function css(curEle) {
        if(typeof arguments[1] === "string"){
            if(!arguments[2]){
                return getCss.apply(this, arguments);
            }
            setCss.apply(this, arguments)
        }
        arguments[1] = arguments[1] || 0;
        if(arguments[1].toString() === "[object Object]"){
            setCss.apply(this, arguments);
        }
    }

    return {
        offset: offset,
        listToArray: listToArray,
        jsonParse: jsonParse,
        win: win,
        children: children,
        prev: prev,
        next: next,
        prevAll: prevAll,
        nextAll: nextAll,
        sibling: sibling,
        siblings: siblings,
        index: index,
        firstChild: firstChild,
        lastChild: lastChild,
        append: append,
        prepend: prepend,
        insertBefore: insertBefore,
        insertAfter: insertAfter,
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        getElementsByClass: getElementsByClass,
        getCss: getCss,
        setCss: setCss,
        setGroupCss: setGroupCss,
        css: css
    };
})();