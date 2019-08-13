let MyPromise = require('./Promise');
let p1 = new Promise(function (resolve, reject) {
   setTimeout(function () {
      let num = Math.random();
      if(num < .5){
          resolve(num);
      } else {
         reject('fail');
      }
   });
});

p1.then(function (data) {
    console.log(data);
}, function (err) {
    console.log(err);
});