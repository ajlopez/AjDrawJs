
var ajdraw = require('../src/ajdraw');

exports['create composite as object'] = function (test) {
    var from = ajdraw.point(1, 42);
    var to = ajdraw.point(2, 3);
    var line = ajdraw.line(from, to, { color: "red" });
	
	var composite = ajdraw.composite([line], { color: "red" });
    
    test.ok(composite);
    test.equal(typeof composite, 'object');
};
