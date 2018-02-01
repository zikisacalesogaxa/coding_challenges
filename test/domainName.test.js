const assert = require('assert');
const domainName = require('../functions/domainName');

describe('tests for domainName function', () => {

    it('returns the google domain name for url www.google.com', (done) => {
        assert.equal('google', domainName('www.google.com'));
        done();
    });

    it('returns the google domain name for url http://www.google.com', (done) => {
        assert.equal('google', domainName('http://www.google.com'));
        done();
    });

    it('returns the google domain name for url https://www.google.com', (done) => {
        assert.equal('google', domainName('https://www.google.com'));
        done();
    });

    it('returns the node domain name for url www.node.org', (done) => {
        assert.equal('node', domainName('www.node.org'));
        done();
    });

    it('returns the kissanime domain name for url www.kissanime.ru', (done) => {
        assert.equal('kissanime', domainName('www.kissanime.ru'));
        done();
    });

});
