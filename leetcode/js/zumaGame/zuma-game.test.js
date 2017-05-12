jest.dontMock('./zuma-game');

describe('zuma-game', function(){
    var func = require('./zuma-game');
    it('zuma-game', function(){
        expect(func()).toEqual(true);

    });
});