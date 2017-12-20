const assert = require('assert');
const firstNonDuplicate = require('../functions/firstNonDuplicate');

describe('first non-duplicate funtion test', () => {

    it('should return t for national', (done) => {
        assert.equal('t', firstNonDuplicate('national'));
        done();
    });

    it('should return 0 for juanjuan', (done) => {
        assert.equal(0, firstNonDuplicate('juanjuan'));
        done();
    });

});