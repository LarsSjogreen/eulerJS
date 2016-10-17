var assert = require('assert');
var eu = require('../euler.js');

var euler = new eu();

describe('Euler', function() {
	describe('euler1', function() {
		it('should run euler.euler1(10,3,5) and return 23', function() {
			assert.equal(23, euler.euler1(10,3,5));
		});
		it('should run euler.euler1(1000,3,5) and return 233168', function() {
			assert.equal(233168, euler.euler1(1000,3,5));
		});
	});

	describe('euler2', function() {
		it('should run euler.euler2(100) and return 44', function() {
			assert.equal(44, euler.euler2(100));
		});
		it('should run euler.euler2(4000000) and return 4613732', function() {
			assert.equal(4613732, euler.euler2(4000000));
		});
	});
});