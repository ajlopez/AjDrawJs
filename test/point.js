
var ajdraw = require('../src/ajdraw');

exports['create point as object'] = function (test) {
    var point = ajdraw.point(1, 42);
    
    test.ok(point);
    test.equal(typeof point, 'object');
};

exports['get coordinates from point'] = function (test) {
    var point = ajdraw.point(1, 42);
    
    test.equal(point.x(), 1);
    test.equal(point.y(), 42);
};

exports['translate point'] = function (test) {
    var point = ajdraw.point(1, 42);
	var point2 = ajdraw.point(3, 4);

	var result = point.translate(point2);
	
    test.equal(result.x(), 4);
    test.equal(result.y(), 46);
};
