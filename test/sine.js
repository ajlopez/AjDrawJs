
var ajdraw = require('../src/ajdraw');

exports['create sine as object'] = function (test) {
    var from = 0;
    var to = 10;
	var step = 0.01;

    var sine = ajdraw.sine(from, to, step, { color: "red" });
	
    test.ok(sine);
    test.equal(typeof sine, 'object');
};

