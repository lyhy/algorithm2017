jest.dontMock('./ugly-number-ii');

describe('ugly-number-ii', function(){
    var func = require('./ugly-number-ii');
    it('ugly-number-ii', function(){
        expect(func()).toEqual(true);

    });
});