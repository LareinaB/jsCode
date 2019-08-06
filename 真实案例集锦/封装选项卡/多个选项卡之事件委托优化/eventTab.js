~function(){
    /**
     *
     * @param container 当前大容器
     * @param defaultIndex 默认选中项的索引
     * @explain 封装一个选项卡，只要大结构保持统一，后面实现选项卡只需要调用该方法即可
     *
     */
    function tabChange (container, defaultIndex) {
        var tabOptions= utils.firstChild(container),
            oLis = utils.children(tabOptions),
            divList = utils.children(container, "div");

        // 默认样式
        defaultIndex = defaultIndex || 0;
        // defaultIndex
        utils.addClass(oLis[defaultIndex], "select");
        utils.addClass(divList[defaultIndex], "select");

        // 使用事件委托优化点击事件
        tabOptions.onclick = function (e) {
            e = e || window.event;
            e.target = e.target || e.srcElement;
            // 点击的是li标签
            if(e.target.tagName.toLowerCase() === "li"){
                detailFn.call(e.target, oLis, divList);
            }
        };
    }

    // 只需保证this是当前点击的li
    function detailFn(oLis, divList) {
        var index = utils.index(this);
        utils.addClass(this, "select");
        for (var i = 0; i < oLis.length; i++) {
            i === index ? utils.addClass(divList[i], "select")
                : (utils.removeClass(divList[i], "select"), utils.removeClass(oLis[i], "select"));
        }
    }
    window.tabChange = tabChange;
}();

