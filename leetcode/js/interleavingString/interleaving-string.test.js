jest.dontMock('./interleaving-string');

describe('interleaving-string', function(){
    var func = require('./interleaving-string');
    it('interleaving-string', function(){
        expect(func()).toEqual(true);

    });
});