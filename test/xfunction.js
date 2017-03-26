
var ajdraw = require('../src/ajdraw');

exports['create xfunction as object'] = function (test) {
	var fn = function (x) { return x * 2; };
    var from = 0;
    var to = 10;
	var step = 0.01;

    var xfunction = ajdraw.xfunction(fn, from, to, step, { color: "red" });
	
    test.ok(xfunction);
    test.equal(typeof xfunction, 'object');
};

