let a =0;
const obj ={
    a:1,
    b:function () {
        console.log(this.a);
    }
};
const obj1={
    a:2
};
const fun=obj.b;
fun();
fun.apply(obj);
let f = fun.bind(obj1);
console.log(f);
f.apply(obj);
const fun1 = fun.bind(obj1);
new fun();