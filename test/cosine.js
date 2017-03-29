
var ajdraw = require('../src/ajdraw');

exports['create cosine as object'] = function (test) {
    var from = 0;
    var to = 10;
	var step = 0.01;

    var cosine = ajdraw.cosine(from, to, step, { color: "red" });
	
    test.ok(cosine);
    test.equal(typeof cosine, 'object');
};

