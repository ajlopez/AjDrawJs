
var ajdraw = require('../src/ajdraw');

exports['create image as object'] = function (test) {
    var image = ajdraw.image({});
    
    test.ok(image);
    test.equal(typeof image, 'object');
};
