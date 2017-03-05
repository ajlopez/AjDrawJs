
var ajdraw = require('../src/ajdraw');

exports['create point as object'] = function (test) {
    var point = ajdraw.point(1, 42);
    
    test.ok(point);
    test.equal(typeof point, 'object');
};
