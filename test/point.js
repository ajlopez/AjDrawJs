
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

exports['resize point'] = function (test) {
    var point = ajdraw.point(1, 21);

	var result = point.resize(2);
	
    test.equal(result.x(), 2);
    test.equal(result.y(), 42);
};

exports['horizontal resize point'] = function (test) {
    var point = ajdraw.point(1, 42);

	var result = point.horizontalResize(2);
	
    test.equal(result.x(), 2);
    test.equal(result.y(), 42);
};

exports['vertical resize point'] = function (test) {
    var point = ajdraw.point(1, 21);

	var result = point.verticalResize(2);
	
    test.equal(result.x(), 1);
    test.equal(result.y(), 42);
};

exports['rotate point 0 degrees'] = function (test) {
    var point = ajdraw.point(1, 42);

	var result = point.rotate(0);
	
    test.equal(result.x(), 1);
    test.equal(result.y(), 42);
};

exports['rotate point 90 degrees'] = function (test) {
    var point = ajdraw.point(1, 42);

	var result = point.rotate(90);
	
    test.equal(result.x(), -42);
    test.equal(result.y(), 1);
};

exports['rotate point 180 degrees'] = function (test) {
    var point = ajdraw.point(1, 42);

	var result = point.rotate(180);
	
    test.equal(result.x(), -1);
    test.equal(result.y(), -42);
};

exports['rotate point 270 degrees'] = function (test) {
    var point = ajdraw.point(1, 42);

	var result = point.rotate(270);
	
    test.equal(result.x(), 42);
    test.equal(result.y(), -1);
};
