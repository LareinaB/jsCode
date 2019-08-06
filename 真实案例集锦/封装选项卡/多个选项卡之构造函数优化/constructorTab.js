~function () {

    function TabChange(container, defaultIndex) {
       // return 的是一个实例
       return this.init(container, defaultIndex);
    }

    TabChange.prototype = {
        constructor: TabChange,
        // 按照默认索引选中默认样式
        defaultIndexEven: function () {
            utils.addClass(this.oLis[this.defaultIndex], "select");
            utils.addClass(this.divList[this.defaultIndex], "select");
        },
        // 事件委托实现切换
        liveClick: function () {
            var _this = this;
            this.tabFirst.onclick = function (e) {
                e = e || window.event;
                e.target = e.target || e.srcElement;
                // _this是当前实例， this是li标签
                if (e.target.tagName.toLowerCase() === "li") {
                    _this.detailFn(e.target);
                }
            };
        },
        detailFn: function (curEle) {
            // this是当前实例
            var index = utils.index(curEle);
            for (var i = 0; i < this.oLis.length; i++) {
                i === index ? utils.addClass(this.divList[i], "select")
                    : (utils.removeClass(this.divList[i], "select"), utils.removeClass(this.oLis[i], "select"));
            }
        },
        // 初始化 当前插件唯一入口
        init: function (container, defaultIndex) {
            this.container = container;
            this.defaultIndex = defaultIndex || 0;
            this.tabFirst = utils.firstChild(this.container);
            this.oLis = utils.children(this.tabFirst);
            this.divList = utils.children(this.container, "div");
            this.defaultIndexEven();
            this.liveClick();

            // 初始化之后返回当前实例
            return this;
        }

    };

    window.TabChange = TabChange
}();

