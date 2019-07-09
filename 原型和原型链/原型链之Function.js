function Fn() {

}
Fn.prototype = {
    constructor: Fn,

};

var f = new Fn;
