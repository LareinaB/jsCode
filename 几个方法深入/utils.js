var utils = {
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
    }
};