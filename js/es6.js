let arr2 = [{name: 'zfpx', age: 9}, [1, 2], 3];
let [{name, age}, [d, e], f] = arr2;

let obj = {name: 'es6', age: 1};
let {name: myname, age: mayname} = obj;

function ajax(url = "http://baidu.com", method = "get") {

}

let obj1 = {
    name: 'js',
    getName: () => {
        console.log(this.name);
    }
};

let obj2 = {
    name: 'html',
    gN: obj1.getName
};

obj2.gN();

class Parent {
    constructor() {
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    getAge() {
        console.log(this.age);
    }
}


function A() {
    
}