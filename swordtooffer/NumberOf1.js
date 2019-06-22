function NumberOf1(n)
{
    // write code here
    var count = 0;
    while(n){
        ++ count;
        n = (n-1) & n;
    }
    return count;
}

console.log(NumberOf1(8));
