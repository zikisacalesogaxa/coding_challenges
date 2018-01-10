const assert = require('assert');
const duplicatesCount = require('../functions/duplicatesCount');

describe('duplicates count function tests', () => {

    it('should return 1, the number of duplicated letters from string, when given invisibility', (done) => {
        assert.equal(1, duplicatesCount('invisibility'));
        done();
    });

    it('should return 2, the number of duplicated letters from string, when given invisibilities', (done) => {
        assert.equal(2, duplicatesCount('invisibilities'));
        done();
    });

});
