jest.dontMock('./permutation-in-string');

describe('permutation-in-string', function(){
    var func = require('./permutation-in-string');
    it('permutation-in-string', function(){
        expect(func()).toEqual(true);

    });
});