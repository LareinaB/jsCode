// async function printNum() {
//     for(let i=0;i<5;i++){
//         var res = await setTimeout(
//             function(){
//                 console.log(11);
//             }, 1000);
//         console.log(i);
//         // console.log(res);
//     }
// }
// printNum();

// let a = 0;
// let b = 0;
// async function sum() {
//     a = await new Promise((resolve, reject) => {
//         resolve(3);
//     });
//     b = await new Promise((resolve, reject) => {
//         resolve(4);
//     });
//     console.log(a + b);
// }
// console.log(a + b);
// sum();

function getNum() {
   var a = 1;
   function getA() {
       console.log(a);
   }
   function setA(num) {
       a = num;
   }
   this.setA = setA;
   this.getA = getA;
}
getNum.getA();
getNum.setA(5);
getNum.getA();

// function getNum() {
//    var a = 1;
// }
// getNum.prototype.setA = function (num) {
//     this.a = num;
// };
// getNum.prototype.getA = function () {
//     console.log(this.a) ;
// };
// getNum.prototype.getA();