const assert = require('assert');
const filterMaker = require('../libs/filterMaker');

describe('tests for function that creates filter options', () => {

    it('', (done) => {
        assert.deepEqual(filterMaker(['gentlemans club', 'night_club', 'spaza shop', 'foot_spa', 'national park', 'gym', 'death forest', 'cales gym']), ['club', 'forest', 'gym', 'park', 'shop', 'spa']);
        done();
    });

});