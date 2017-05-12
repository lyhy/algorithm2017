jest.dontMock('./permutations');

describe('permutations', function(){
    var func = require('./permutations');
    it('permutations', function(){
        expect(func()).toEqual(true);

    });
});