
var ajdraw = require('../src/ajdraw');

exports['create triangle as object'] = function (test) {
    var from = ajdraw.point(1, 42);
    var to = ajdraw.point(2, 3);
    var to2 = ajdraw.point(3, 3);

    var triangle = ajdraw.triangle(from, to, to2, { color: "red" });
	
    test.ok(triangle);
    test.equal(typeof triangle, 'object');
};
