var ary1 = ['Jack','Tom','Anny','Lucy'],
    ary2 = ['Tom','Danny'],
    ary3 = ['Jack','Lily'];

var total = ary1.concat(ary2, ary3);

var set = new Set(total);
console.log(set.size);

