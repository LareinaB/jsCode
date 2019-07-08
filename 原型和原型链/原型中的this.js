function Fn(){
    this.x = 100;
}
Fn.prototype.x = 200;
Fn.prototype.getX = function () {
    console.log(this.x);
};

var f = new Fn; // this -> f.x = 100
f.getX(); // this.x -> f.x = 100
f.__proto__.getX(); // 200
Fn.prototype.getX(); // 200
