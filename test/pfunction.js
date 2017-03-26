
var ajdraw = require('../src/ajdraw');

exports['create pfunction as object'] = function (test) {
	var fn = function (n) { return ajdraw.point(n, n * 2); };
    var from = 0;
    var to = 10;
	var step = 0.01;

    var pfunction = ajdraw.pfunction(fn, from, to, step, { color: "red" });
	
    test.ok(pfunction);
    test.equal(typeof pfunction, 'object');
};

