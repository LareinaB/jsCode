var obj = {
    ZuoZhuan: "TurnLeft",
    YouZhuan: "TurnRight",
    QianJin: "Forward",
    HouTui: "Backward"
};
var keys = ["ZuoZhuan", "YouZhuan", "QianJin", "HouTui"];

var obj1 = {
    SDFlkjdf: "LNCIls"
};
var keys1 = ["SDFlkjdf"];


function order() {
    for (var i = 0; i < keys1.length; i++) {
        //console.log(obj.hasOwnProperty(keys1[i]));
        if(obj1.hasOwnProperty(keys1[i])){
            console.log(obj1[keys1[i]]);
        }
    }
}

order();

// function order() {
//     var nums = read_line().split(" ");
//     while (nums[0]) {
//         var obj = {};
//         while (nums[0]--) {
//             var relations = read_line().split(" ");
//             obj[relations[0]] = relations[1];
//         }
//
//         var keys = [];
//         while (nums[1]--) {
//             keys.push(read_line());
//         }
//         for (var i = 0; i < keys.length; i++) {
//             print(obj[keys[i]]);
//         }
//     }
// }