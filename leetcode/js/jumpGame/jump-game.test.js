jest.dontMock('./jump-game');

describe('jump-game', function(){
    var func = require('./jump-game');
    it('jump-game', function(){
        expect(func()).toEqual(true);

    });
});