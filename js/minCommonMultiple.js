function fn(num) {
    // var min = 0;
    if (num > 100) {
        return 0;
    }
    if (num % 15 === 0) {
        return num + fn(num + 1);
    }
    return fn(num + 1)
}

console.log(fn(1));
