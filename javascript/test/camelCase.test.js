const assert = require('assert');
const camelCase = require('../libs/camelCase');

describe('camel case function tests', () => {

    it('should return helloWorld for Hello World', (done) => {
        assert.equal('helloWorld', camelCase('Hello World'));
        done();
    });

    it('should return camelCaseFunction for Camel case Function', (done) => {
        assert.equal('camelCaseFunction', camelCase('Camel case Function'));
        done();
    });

});
