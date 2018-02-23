const assert = require('assert');
const totalAmount = require('../libs/totalAmount');

describe('total Amount function test', () => {

    it('should return 10 for [1, 2, 4, 3]', (done) => {
        assert.equal(10, totalAmount([1, 2, 4, 3]));
        done();
    });

    it('should return 1 for [0, 1]', (done) => {
        assert.equal(1, totalAmount([0, 1]));
        done();
    });

});