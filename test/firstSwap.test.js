const assert = require('assert');
const swap = require('../functions/firstSwap');

describe('firstSwap function test', () => {

    it('should return [2, 3, 1] for [3, 2, 1]', (done) => {
        assert.deepEqual([3, 2, 1], swap([2, 3, 1]));
        done();
    });

    it('should return [9] for [9]', (done) => {
        assert.deepEqual([9], swap([9]));
        done();
    });

});