
var ajdraw = require('../src/ajdraw');

exports['create rectangle as object'] = function (test) {
    var from = ajdraw.point(1, 42);
    var to = ajdraw.point(2, 3);

    var rectangle = ajdraw.rectangle(from, to, { color: "red" });
	
    test.ok(rectangle);
    test.equal(typeof rectangle, 'object');
};
