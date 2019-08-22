var a = function (i) {
    return function () {
        console.log(i);
    }
};

for (var i = 0; i < 5; i++) {
    setTimeout(a(i), 100);
}
