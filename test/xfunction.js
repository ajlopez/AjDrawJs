
var ajdraw = require('../src/ajdraw');

exports['create xfunction as object'] = function (test) {
	var fn = function (x) { return x * 2; };
    var from = ajdraw.point(1, 42);
    var to = ajdraw.point(2, 3);

    var xfunction = ajdraw.xfunction(fn, from, to, { color: "red" });
	
    test.ok(xfunction);
    test.equal(typeof xfunction, 'object');
};

