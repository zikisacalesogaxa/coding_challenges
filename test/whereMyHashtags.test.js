const whereMyHasgtags = require('../libs/whereMyHashtags');
const assert = require('assert');

describe('tests for whereMyHashtags function', () => {

    it('returns and array of all the hashtags from a string', (done) => {
        assert.deepEqual(['#IamCale', '#caleArts'], whereMyHasgtags('use #caleArts to be featured and follow me using the #IamCale'));
        done();
    });

});
