jest.dontMock('./contiguous-array');

describe('contiguous-array', function(){
    var func = require('./contiguous-array');
    it('contiguous-array', function(){
        expect(func()).toEqual(true);

    });
});