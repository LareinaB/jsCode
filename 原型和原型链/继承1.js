// function Parent(name){
//     this.name = name;
// }
// Parent.prototype.age = 23;
// function Child(name){
//     Parent.call(this, name)
// }
//
// var child = new Child('lulu');
// console.log(child.name); // lulu
// console.log(child.age); // undefined

// function Parent(){
//     this.name = 'lulu';
//     this.ary = [1,2,3,4];
// }
//
// function Child(){
//     this.age = 23
// }
//
// Child.prototype = new Parent;
//
// var child1 = new Child;
// var child2 = new Child;
// console.log(child1.ary); // [1,2,3,4]
// console.log(child2.ary); // [1,2,3,4]
// child1.ary[0] = 100;
// console.log(child1.ary); // [100,2,3,4]
// console.log(child2.ary); // [100,2,3,4]

// function Parent(){
//     this.name = 'lulu';
//     this.ary = [1,2,3,4];
// }
// function Child(){
//     Parent.call(this);
//     this.age = 23
// }
//
// Child.prototype = new Parent;
//
// var child1 = new Child;
// var child2 = new Child;
// child1.ary[0] = 100;
// console.log(child1.ary); // [100,2,3,4]
// console.log(child2.ary); // [1,2,3,4]

// function Parent(){
//     this.name = 'lulu';
//     this.ary = [1,2,3,4];
// }
// function Child(){
//     Parent.call(this);
//     this.age = 23
// }
//
// Child.prototype = Parent.prototype;
//
// var child1 = new Child;
//
// console.log(child1.__proto__.constructor);  // [Function: Parent]

// function Parent(){
//     this.name = 'lulu';
//     this.ary = [1,2,3,4];
// }
// function Child(){
//     Parent.call(this);
//     this.age = 23
// }
//
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor = Child;
//
// var child1 = new Child;
// var parent = new Parent;
// console.log(child1.__proto__.constructor); // [Function: Child]
// console.log(parent.__proto__.constructor); // [Function: Parent]

// function Parent(){
//     this.name = 'lulu';
//     this.ary = [1,2,3,4];
// }
// function Child(){
//     constructor: Child;
//     var p = new Parent;
//     for(var key in p){
//         if(key in this){
//             this['my'+key] = p[key];
//         }
//         this[key] = p[key];
//     }
//     this.age = 23
// }
// var child1 = new Child;
// var child2 = new Child;
// child1.ary[1] = 23;
// console.log(child2.ary);

