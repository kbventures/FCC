require('chai').assert;
require('chai').expect;
require('chai').should();
var test = require('../index');




describe('Unit test.. ', () => 
{

       it('ownProps should include "name"', () => {
                test.ownProps.should.include('name');
       })
       it('prototypeProps should include "numblegs"', () => {
               test.prototypeProps.should.include('numLegs');
       })

});

