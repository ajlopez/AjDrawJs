
var ajdraw = require('../src/ajdraw');

exports['create yfunction as object'] = function (test) {
	var fn = function (y) { return y * 2; };
    var from = ajdraw.point(1, 42);
    var to = ajdraw.point(2, 3);

    var yfunction = ajdraw.yfunction(fn, from, to, { color: "red" });
	
    test.ok(yfunction);
    test.equal(typeof yfunction, 'object');
};

