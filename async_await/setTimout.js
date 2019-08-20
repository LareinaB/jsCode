function timeout(arr){
    for (let i = 0; i < arr.length; i++) {
        var count = 0;
        setTimeout(()=>{
            console.log(arr[i]);
        }, count);
        count++;
    }
}
var arr = [1000, 200, 500];
timeout(arr);

function timeoutp(arr){
    return new Promise(() => {

    });
    for (let i = 0; i < arr.length; i++) {
        var count = 0;
        setTimeout(()=>{
            console.log(arr[i]);
        }, count);
        count++;
    }
}