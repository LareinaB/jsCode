// let Q = require('q');
let Q = {
    defer() {
        let success, error;
        return {
            resolve(data){
                success(data);
            },
            reject(error){
                error(error);
            },
            promise: {
                then(onfulfilled, onRejected){
                    success = onfulfilled;
                    error = onRejected;
                }
            }
        }
    }
};


let fs = require('fs');
function readFlie(filename) {
    let defer = Q.defer();
    fs.readFile(filename, 'utf8', function (err, data) {
        if(err){
            defer.reject(err);
        } else {
            defer.resolve(data)
        }
    });
    return defer.promise;
}
readFlie('data.txt').then(function (data) {
    console.log(data);
});