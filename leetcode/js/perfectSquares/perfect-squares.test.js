jest.dontMock('./perfect-squares');

describe('perfect-squares', function(){
    var func = require('./perfect-squares');
    it('perfect-squares', function(){
        expect(func()).toEqual(true);

    });
});