jest.dontMock('./patching-array');

describe('patching-array', function(){
    var func = require('./patching-array');
    it('patching-array', function(){
        expect(func()).toEqual(true);

    });
});