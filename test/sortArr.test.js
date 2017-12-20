const assert = require('assert');
const sortArr = require('../functions/sortArr');

describe('sortArr function tests', () => {

    it('should return [1, 1, 2, 2, 3, 4, 4] for [4, 3, 1, 2, 2, 4, 1]', (done) => {
        assert.deepEqual([1, 1, 2, 2, 3, 4, 4], sortArr([4, 3, 1, 2, 2, 4, 1]));
        done();
    });

    it('should return [2, 4] for [4, 2]', (done) => {
        assert.deepEqual([2, 4], sortArr([4, 2]));
        done();
    });

    it('should return [4] for [4]', (done) => {
        assert.deepEqual([4], sortArr([4]));
        done();
    });

    it('should return [3, 3, 3] for [3, 3, 3]', (done) => {
        assert.deepEqual([3, 3, 3], sortArr([3, 3, 3]));
        done();
    });

});