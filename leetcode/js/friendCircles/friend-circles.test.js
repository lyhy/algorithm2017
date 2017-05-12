jest.dontMock('./friend-circles');

describe('friend-circles', function(){
    var func = require('./friend-circles');
    it('friend-circles', function(){
        expect(func()).toEqual(true);

    });
});