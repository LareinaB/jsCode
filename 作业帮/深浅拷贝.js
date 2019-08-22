let obj1 = {name: '1'};
let obj2 = {age: 2};

let obj3 = {};

// 1.循环
// for (var key in obj1) {
//     obj3[key] = obj1[key];
// }
// for (var key in obj2) {
//     obj3[key] = obj2[key];
// }

//2.assign target 后面是来源 都赋给target
// Object.assign(obj3, obj1, obj2);

obj3 = {...obj1, ...obj2};
// console.log(obj3);

let obj4 = {name: 'js', age: 20, home: {
    city: 'shanghai'
}};

// let obj5 = {};
// obj5 = Object.assign(obj5, obj4);

// 深拷贝方法1
let obj5 = JSON.parse(JSON.stringify(obj4));
obj5.home.city = 'xian';
console.log(obj4);
console.log(obj5);

