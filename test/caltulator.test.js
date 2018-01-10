const assert = require('assert');
const caltulate = require('../functions/caltulator');

describe('caltulator function tests', () => {

    it('should return the sum of the numbers', (done) => {
        assert.equal(4, caltulate(2, '+', 2));
        done();
    });

    it('should return the difference of the numbers', (done) => {
        assert.equal(3, caltulate(6, '-', 3));
        done();
    });

    it('should return the product of the two numbers', (done) => {
        assert.equal(36, caltulate(6, '*', 6));
        done();
    });

    it('should return the division of the numbers', (done) => {
        assert.equal(5, caltulate(10, '/', 2));
        done();
    });

    it('should return the division of the numbers from two decimal points', (done) => {
        assert.equal(3.33, caltulate(10, '/', 3));
        done();
    });

});