
var ajdraw = require('../src/ajdraw');

exports['create repeat as object'] = function (test) {
	var fn = function (point) { return ajdraw.point(point.x() *2, point.y() / 2); };
	var point = ajdraw.point(10, 10);
    var ntimes = 100;

    var repeat = ajdraw.repeat(fn, point, ntimes, { color: "red" });
	
    test.ok(repeat);
    test.equal(typeof repeat, 'object');
};

