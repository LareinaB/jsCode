var utils = (function () {
    return {
        offset: function(curEle) {
            var totalLeft = null, totalTop=null;
            totalLeft += curEle.offsetLeft;
            totalTop += curEle.offsetTop;
            while(curEle.offsetParent){
                curEle = curEle.offsetParent;
                // 累加父级参照物的边框及偏移
                if(navigator.userAgent.indexOf("MSIE 8.0") === -1){
                    totalLeft += curEle.offsetLeft;
                    totalTop += curEle.offsetTop;
                }else {
                    totalLeft += curEle.clientLeft + curEle.offsetLeft;
                    totalTop += curEle.clientTop + curEle.offsetTop;
                }
            }
            return {left: totalLeft, top: totalTop};
        },
        getCss: function (curEle, attr) {
            var val = null, reg = null;
            if ('getComputedStyle' in window) {
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
        },
        listToArray: function (likeArray) {
            var ary = [];
            try {
                ary = ary.slice.call(likeArray);
            } catch(e) {
                for (var i = 0; i < likeArray.length; i++) {
                    ary[ary.length] = likeArray[i];
                }
            }
            return ary;
        },
        // JSON字符串转为JSON对象
        jsonParse: function (str) {
            return "JSON" in window ? JSON.parse(str) : eval("(" + str+ ")");
        },
        win: function (attr, value) {
        if(typeof value === 'undefined'){ // 没传value值
            return document.documentElement[attr] || document.body[attr];
        }else{
            document.documentElement[attr] = value;
            document.body[attr] = value;
        }
    }
    };
})();