var putin = "a:3,b:5,c:2@a:3,b:2";


var arr = putin.split("@");
var globalArr = arr[0].split(",");
var localArr = arr[1].split(",");

function getObj(arr){
    var obj = {};
    for(var i = 0; i < arr.length; i ++){
        var curArr = arr[i].split(":");
        if(typeof obj[curArr[0]] === "undefined"){
            obj[curArr[0]] = parseInt(curArr[1]);
        }
    }
    return obj;
}

var glo = getObj(globalArr);
var loc = getObj(localArr);

for(var key in loc){
    if(glo.hasOwnProperty(key)){
        if(glo[key] === loc[key]){
            delete glo[key];
        }else{
            glo[key] = glo[key] - loc[key];
        }
    }
}
var remain = '';
for(var key in glo){
    remain += key+":"+glo[key]+",";
}
console.log(remain.slice(0, remain.length - 1));