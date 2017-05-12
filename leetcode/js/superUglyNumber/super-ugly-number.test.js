jest.dontMock('./super-ugly-number');

describe('super-ugly-number', function(){
    var func = require('./super-ugly-number');
    it('super-ugly-number', function(){
        expect(func()).toEqual(true);

    });
});