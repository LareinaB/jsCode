var oTab = document.getElementById('tab'),
    tHead = oTab.tHead,
    oThs = tHead.rows[0].cells,
    tBody = oTab.tBodies[0],
    oRows = tBody.rows;
var data = null;

// 获取后台数据->JSON格式字符串->ajax

var xhr = new XMLHttpRequest;
xhr.open("get", 'data.txt', false);
xhr.onreadystatechange = function () {
  if(xhr.readyState == 4 && xhr.status === 200){
      data = utils.jsonParse(xhr.responseText);
  }
};
xhr.send();
console.log(data);

// 绑定数据
function bind() {
    var frg = document.createDocumentFragment();
    // 有几条数据就要创建多少个tr
    for (var i = 0; i < data.length; i++) {
        var cur = data[i];
        var oTr = document.createElement("tr");
        // 每个tr中还有data[i].length个td
        for(var key in cur){
            var oTd = document.createElement("td");
            oTd.innerHTML = key === 'sex' ? cur[key] === 0 ? "男" : "女" : cur[key];

            oTr.appendChild(oTd);
        }
        frg.appendChild(oTr);
    }
    tBody.appendChild(frg);
    frg = null;
}
bind();
// 隔行变色
function changeBg() {
    for (var i = 0; i < oRows.length; i++) {
        oRows[i].className = i%2 === 1 ? 'bg' : '';
    }
}
changeBg();

//表格排列
function sort(index) {
    // ->oRows所有行
    var _this = this;
    _this.flag *= -1;
    var ary = utils.listToArray(oRows);
    //点击其他列要先让其他列的flag回到默认初始值，这样再回过头来点击其他列还是默认升序的
    for (var i = 0; i < oThs.length; i++) {
        if(oThs[i] !== _this){
            oThs[i].flag = -1;
        }
    }

    ary.sort(function (a, b) {
        var curInn = a.cells[index].innerHTML,
            nextInn = b.cells[index].innerHTML,
            curInnNum = parseFloat(a.cells[index].innerHTML),
            nextInnNum = parseFloat(b.cells[index].innerHTML);
        if(isNaN(curInnNum) || isNaN(nextInnNum)){
            return curInn.localeCompare(nextInn)*_this.flag
        }else{
            // 当前行，第index列
            return ( curInnNum - nextInnNum )*_this.flag;
        }
    });
    // 按照最新顺序把每一行重新添加到tBody中
    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
    frg = null;
    changeBg();
}

for (var i = 0; i < oThs.length; i++) {
    var curTh = oThs[i];

    if(curTh.className === 'cursor'){
        curTh.index = i;
        curTh.flag = -1;
        curTh.onclick = function () {
            sort.call(this, this.index);
        };
    }
}
//
// oThs[1].flag = 1;
// oThs[1].onclick = function () {
//   sort.call(this, 1);
// };
// oThs[2].onclick = function () {
//     sort(this, 2);
// };