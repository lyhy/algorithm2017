jest.dontMock('./perfect-number');

describe('perfect-number', function(){
    var func = require('./perfect-number');
    it('perfect-number', function(){
        expect(func()).toEqual(true);

    });
});