function showTime(val) {
    var day = 0,
        hour = 0,
        minute = 0,
        second = 0,
        milSecond = 0;

    var base = 1000 * 60 * 60 * 24;
    day = Math.floor(val / base); // 天
    val = val - base * day > 0 ? val - base * day : 0;
    base = 60 * 60 * 24;
    hour = Math.floor(val / base); // 小时
    val = val - base * hour > 0 ? val - base * hour : 0;
    base = 60 * 24;
    minute = Math.floor(val / base); // 分钟
    val = val - base * minute > 0 ? val - base * minute : 0;
    base = 24;
    second = Math.floor(val / base); // 秒
    val = val - base * second > 0 ? val - base * second : 0;
    milSecond = Math.floor(val % base); // 毫秒
    console.log(`${day}D ${hour}H ${minute}M ${second}S ${milSecond}MS`);
}

showTime(74);
showTime(86400000);
//
showTime(43000000);
