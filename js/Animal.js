function Animal() {
    this.eat = () => {
        console.log('animals eat')
    }
}
function Dog() {
    this.bark = () => {
        console.log('dogs bark')
    }
}
Dog.prototype = new Animal();

var hashiqi = new Dog()

fn('zhangsan')
function fn(name) {
    age = 20
    console.log(name, age)
    var age
}
var a = {
    name: 'A',
    fn: () => {
      console.log(this.name)
    }
}
a.fn()
a.fn.call({name: 'B'})
var fn1 = a.fn
fn1()
// 构造函数中的this
function Foo(name) {
    this.name = name
}
var f = new Foo('zhangsan')
// 作为对象属性执行，this就是这个对象
var obj = {
    name: 'A',
    printName: () => {
        console.log(this.name)
    }
}
obj.printName()
// 作为普通函数执行
function fn() {
   console.log(this)
}

// call apply bind
var fn1 = function (name) {
    alert(name)
    console.log(this)
}
// this就是第一个参数
fn1.call({x: 100}, 'zhangsan')

function F1() {
    var a = 100
    return () => {
        console.log(a)
    }
}
// var a = 200
var f1 = F1()
// f1()
function F2(fn) {
    var a = 200
    fn()
}
F2(f1)

console.log(100)
setTimeout(() => {
    console.log(200)
}, 1000)
console.log(300)

console.log('start')
$.get('data.json', (data) => {
    console.log(data)
})
console.log('end')
