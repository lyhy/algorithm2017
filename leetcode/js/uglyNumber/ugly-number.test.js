jest.dontMock('./ugly-number');

describe('ugly-number', function(){
    var func = require('./ugly-number');
    it('ugly-number', function(){
        expect(func()).toEqual(true);

    });
});