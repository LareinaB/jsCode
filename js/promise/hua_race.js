// Promise._race = function (arr) {
//     return new Promise(function (resolve, reject) {
//         for(let i=0;i<arr.length;i++){
//             arr[i].then(resolve, reject);
//         }
//     })
// };
// var p1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log(1);
//     },200);
// });
// var p2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log(2);
//     },100);
// });
// var p3 = new Promise(function (resolve, reject) {
//     //throw Error("出错了");
// });

/*
Promise.all([p1,p2]).then(function (data) {
    console.log(data);
},function (e) {
    console.log(e);
});
*/

/*Promise._all([p1,p2]).then(function (data) {
    console.log(data);
},function (e) {
    console.log(e);
});*/

// Promise._race([p1,p2,p3]).then(function (data) {
//     console.log(data);
// },function (e) {
//     console.log(e);
// });

Promise._race = function (arr) {
    return new Promise(function (resolve, reject) {
        for(let i=0;i<arr.length;i++){
            arr[i].then(resolve, reject);
        }
    })
};
var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1);
    },200);
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2);
    },100);
});

Promise._all = function (arr) {
    let res = [];
    return new Promise(function(resolve, reject){
        for(let i=0;i<arr.length;i++){
            arr[i].then(function (data) {
                res.push(data);
                if(arr.length === res.length){
                    resolve(res);
                }
            }, reject);
        }
    });
};

Promise._all([p1,p2]).then(function (data) {
    console.log(data);
},function (e) {
    console.log(e);
});