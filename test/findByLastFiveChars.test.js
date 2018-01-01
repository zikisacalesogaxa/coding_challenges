const assert = require('assert');
let users = require('../data/data');
let findByLastFiveChars = require('../functions/findByLastFiveChars');

describe('Find user by last characters', () => {

    it('should return the users name with same characters', (done) => {
        assert.equal("Cale", findByLastFiveChars(users, "fg9fd"));
        done();
    });

    it('should return person does not exist if the characters are not found', (done) => {
        assert.equal("Person dont exist", findByLastFiveChars(users, "f88f8"));
        done();
    });

});
