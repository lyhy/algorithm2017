jest.dontMock('./nim-game');

describe('nim-game', function(){
    var func = require('./nim-game');
    it('nim-game', function(){
        expect(func()).toEqual(true);

    });
});