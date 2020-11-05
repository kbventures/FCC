log = console.log;
const iterateOverAllProperties = require('../index');
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();



describe('Unit test.. right type of properties(own vs prototype) are in the correct array', () => 
{
    it('ownProps should include "name"', () => {
            true.should.be.true;
    });
    it('prototypeProps array should include "numbLegs"', () => {
            true.should.be.false;
    })


});


/*
The ownProps array should include "name".

The prototypeProps array should include "numLegs".

Passed
You should solve this challenge without using the built in method Object.keys().

*/