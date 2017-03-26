
var ajdraw = require('../src/ajdraw');

exports['create yfunction as object'] = function (test) {
	var fn = function (y) { return y * 2; };
    var from = 0;
    var to = 10;
	var step = 0.01;

    var yfunction = ajdraw.yfunction(fn, from, to, step, { color: "red" });
	
    test.ok(yfunction);
    test.equal(typeof yfunction, 'object');
};

