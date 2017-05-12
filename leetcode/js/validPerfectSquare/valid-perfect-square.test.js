jest.dontMock('./valid-perfect-square');

describe('valid-perfect-square', function(){
    var func = require('./valid-perfect-square');
    it('valid-perfect-square', function(){
        expect(func()).toEqual(true);

    });
});