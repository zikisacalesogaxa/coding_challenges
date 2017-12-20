const assert = require('assert');
const swap = require('../functions/lastSwap');

describe('lastSwap function test', () => {

    it('should return [3, 2, 1] for [1, 2, 3]', (done) => {
        assert.deepEqual([1, 2, 3], swap([3, 2, 1]));
        done();
    });

    it('should return [2] for [2]', (done) => {
        assert.deepEqual([2], swap([2]));
        done();
    });

    it('should return [2, 1] for [1, 2]', (done) => {
        assert.deepEqual([1, 2], swap([2, 1]));
        done();
    });

});