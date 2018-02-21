const assert = require('assert');
let countVowels = require('../libs/vowelCount');

describe('Vowel count tests', () => {

    it('Should return 5 for string abracadabra', (done) => {
        assert.equal(5, countVowels("abracadabra"));
        done();
    });

    it('should return 1 for string cat', (done) => {
        assert.equal(1, countVowels('cat'));
        done();
    });

    it('should return 0 for string nymph', (done) => {
        assert.equal(0, countVowels('nymph'));
        done();
    });

});