const assert = require('assert');
let data = require('../data/data');
let lastFiveChars = require('../functions/lastFiveChars');

describe('Last five characters function test', () => {

    it('Should return the last five characters of a string', (done) => {
        assert.equal("fg9fd", lastFiveChars(data[0]._ID));
        done();
    });

});