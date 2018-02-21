const assert = require('assert');
const firstDuplicate = require('../libs/firstDuplicate');

describe('firstDuplicate function tests', () => {

    it('should return s for mississipi', (done) => {
        assert.equal('s', firstDuplicate('mississipi'));
        done();
    });

    it('should return 0 for relation', (done) => {
        assert.equal(0, firstDuplicate('relation'));
        done();
    });

});