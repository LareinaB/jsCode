// async function timeout(){
//     return "helloworld";
// }
// timeout().then((result)=>{
//     console.log(result);
// });
// console.log("我在异步函数后面，会先执行谁呢");

// async function timeout1(flag){
//     if(flag){
//         return "hello world";
//     }else{
//         throw new Error("error!!");
//     }
// }

// console.log(timeout1(true));
// console.log(timeout1(false));
// function timeout(ms) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }
  
  // async function asyncPrint(value, ms) {
  //   await timeout(ms);
  //   console.log(value);
  //   return value;   //类似 return Promise.resolve(value)
  // }
  // //async 返回一个promise
  // asyncPrint('hello world', 50).then(function(d){
  //    console.log('then',d);
  // });
  
// function takeLongTime(n) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(n + 200), n);
//     });
// }
//
// function step1(n) {
//     console.log(`step1 with ${n}`);
//     return takeLongTime(n);
// }
//
// function step2(n) {
//     console.log(`step2 with ${n}`);
//     return takeLongTime(n);
// }
//
// function step3(n) {
//     console.log(`step3 with ${n}`);
//     return takeLongTime(n);
// }
//
// async function doIt() {
//     console.time("doIt");
//     const time1 = 300;
//     const time2 = await step1(time1);
//     const time3 = await step2(time2);
//     const result = await step3(time3);
//     console.log(`result is ${result}`);
//     console.timeEnd("doIt");
// }
// doIt();
//
// function doIt() {
//     console.time("doIt");
//     const time1 = 300;
//     step1(time1)
//         .then(time2 => step2(time2))
//         .then(time3 => step3(time3))
//         .then(result => {
//             console.log(`result is ${result}`);
//             console.timeEnd("doIt");
//         });
// }
//
// doIt();
