var p = new Promise((resolve, reject) => {
    reject(1);
    console.log(2);
});

p.then((val) => console.log('fulfilled:', val))
    .then(null, (err) => console.log("rejected:", err));