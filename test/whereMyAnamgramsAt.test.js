const assert = require('assert');
const anagrams = require('../functions/whereMyAnagramsAt');

describe('where my anagrams at function tests', () => {

    it("should return ['aabb', 'bbaa'] for ('abba', ['aabb', 'abcd', 'bbaa', 'dada'])", (done) => {
        assert.deepEqual(['aabb', 'bbaa'], anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
        done();
    });

    it("should return ['carer', 'racer'] for ('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])", (done) => {
        assert.deepEqual(['carer', 'racer'], anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
        done();
    });

});