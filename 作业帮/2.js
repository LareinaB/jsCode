function uniqueReserve(str){

        var obj = {};
        var newStr = '';
        var len = str.length;
        for(var i=0; i<len; i++){
            if(typeof obj[str[i]] === 'undefined'){
                newStr = newStr + str[i];
                obj[str[i]] = 1;
            }
        }
        return newStr;
}

var str = 'absssedbrtryuo';
console.log(uniqueReserve(str).split('').reverse().join(''));