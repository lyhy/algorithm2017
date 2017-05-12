jest.dontMock('./perfect-rectangle');

describe('perfect-rectangle', function(){
    var func = require('./perfect-rectangle');
    it('perfect-rectangle', function(){
        expect(func()).toEqual(true);

    });
});