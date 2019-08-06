~function(){
    /**
     *
     * @param container 当前大容器
     * @param defaultIndex 默认选中项的索引
     * @explain 封装一个选项卡，只要大结构保持统一，后面实现选项卡只需要调用该方法即可
     *
     */
    function tabChange(container, defaultIndex) {
        var tabOptions = utils.firstChild(container),
            oLis = utils.children(tabOptions),
            divList = utils.children(container, "div");
        defaultIndex = defaultIndex || 0;
        // defaultIndex
        utils.addClass(oLis[defaultIndex], "select");
        utils.addClass(divList[defaultIndex], "select");

        for (var i = 0; i < oLis.length; i++) {
            oLis[i].onclick = function () {
                var sibilings = utils.siblings(this);
                // 把兄弟元素节点的样式清除
                for (var i = 0; i < sibilings.length; i++) {
                    utils.removeClass(sibilings[i], "select");
                }
                utils.addClass(this, "select");

                // 当前li元素的父节点的所有弟弟元素节点中索引跟当前相同的增加样式，其余清除样式
                var index = utils.index(this);
                for (var j = 0; j < divList.length; j++) {
                    j === index ? utils.addClass(divList[j], "select") : utils.removeClass(divList[j], "select");
                }
            }
        }
    }
    window.tabChange = tabChange;
}();

