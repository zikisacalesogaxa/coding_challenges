const assert = require('assert');
let findNumbers = require('../functions/justNumbers');

describe('Just the numbers tests', () => {

    it('should return [1, 2, 3] for array [a, 2, 1, t, t, 3]', (done) => {
        assert.deepEqual([1, 2, 3], findNumbers(['a', 2, 1, 't', 't', 3]));
        done();
    });

    it('should return [] for array [a, b, c, d]', (done) => {
        assert.deepEqual([], findNumbers(['a', 'b', 'c', 'd']));
        done();
    });

});
