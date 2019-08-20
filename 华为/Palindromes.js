function Palindromes(str) {
    var strAry = str.split("");
    var strAryRev = strAry.slice();
    
}

var str = '1234521';
// Palindromes(str);

function Palindromes11(str) {
    var start = 0,
        end = str.length - 1;
    while(start < end){
        if(str[start] === str[end]){
            start ++;
            end --;
        } else {
            return false;
        }
    }
    return true;
}

console.log(Palindromes11(str));