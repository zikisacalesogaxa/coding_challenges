const assert = require('assert');
const generateHashtags = require('../libs/generateHashtags.js');

describe('generateHashtags function tests', () => {

    it('should return false if the string is empty', (done) => {
        assert.equal(false, generateHashtags(""));
        done();
    });

    it('should return false if the string is empty (even just a space)', (done) => {
        assert.equal(false, generateHashtags(" "));
        done();
    });

    it('should return #DoWeHaveAHashtag for Do We Have A Hashtag', (done) => {
        assert.equal('#DoWeHaveAHashtag', generateHashtags("Do We Have A Hashtag"));
        done();
    });

    it('should return #CodewarsIsNice for Codewars is nice', (done) => {
        assert.equal('#CodewarsIsNice', generateHashtags("Codewars is nice"));
        done();
    });

    it('should return #A for a', (done) => {
        assert.equal('#A', generateHashtags("A"));
        done();
    });

    it('should return #Codewars for Codewars', (done) => {
        assert.equal('#Codewars', generateHashtags('Codewars'));
        done();
    });

    it('should return false for string with more than 140 char', (done) => {
        assert.equal(false, generateHashtags('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'));
        done();
    });

});
