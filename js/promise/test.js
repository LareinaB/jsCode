setTimeout(function () {
    console.log(3);
});

let p = new Promise((resolve, reject) => {
    console.log(1);
    resolve('resolve');
});

p.then((value) => {
    console.log(value);
});

console.log(2);

