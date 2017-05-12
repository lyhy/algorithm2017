jest.dontMock('./permutation-sequence');

describe('permutation-sequence', function(){
    var func = require('./permutation-sequence');
    it('permutation-sequence', function(){
        expect(func()).toEqual(true);

    });
});