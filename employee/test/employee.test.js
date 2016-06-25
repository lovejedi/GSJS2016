'use strict';

var assert = require('chai').assert;
var Employee = require('../app/scripts/employee.js');

describe('Employee', function () {
    it('should have a firstname and lastname', function () {
        var employee = new Employee(); 
        employee.firstname = 'Bugs';
        employee.lastname = 'Bunny';

        assert.equal(employee.firstname, 'Bugs');
        assert.equal(employee.lastname, 'Bunny');
    });
});
