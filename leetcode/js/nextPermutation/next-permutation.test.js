jest.dontMock('./next-permutation');

describe('next-permutation', function(){
    var func = require('./next-permutation');
    it('next-permutation', function(){
        expect(func()).toEqual(true);

    });
});