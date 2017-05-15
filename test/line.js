
var ajdraw = require('../src/ajdraw');

exports['create line as object'] = function (test) {
    var from = ajdraw.point(1, 42);
    var to = ajdraw.point(2, 3);
    var line = ajdraw.line(from, to, { color: "red" });
    
    test.ok(line);
    test.equal(typeof line, 'object');
	
	test.equal(line.from().x(), 1);
	test.equal(line.from().y(), 42);
	
	test.equal(line.to().x(), 2);
	test.equal(line.to().y(), 3);
	
	test.deepEqual(line.style(), { color: "red" });
};

