jest.dontMock('./elimination-game');

describe('elimination-game', function(){
    var func = require('./elimination-game');
    it('elimination-game', function(){
        expect(func()).toEqual(true);

    });
});