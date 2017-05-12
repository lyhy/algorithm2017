jest.dontMock('./dungeon-game');

describe('dungeon-game', function(){
    var func = require('./dungeon-game');
    it('dungeon-game', function(){
        expect(func()).toEqual(true);

    });
});