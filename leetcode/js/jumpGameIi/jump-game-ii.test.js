jest.dontMock('./jump-game-ii');

describe('jump-game-ii', function(){
    var func = require('./jump-game-ii');
    it('jump-game-ii', function(){
        expect(func()).toEqual(true);

    });
});