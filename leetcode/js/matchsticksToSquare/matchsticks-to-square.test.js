jest.dontMock('./matchsticks-to-square');

describe('matchsticks-to-square', function(){
    var func = require('./matchsticks-to-square');
    it('matchsticks-to-square', function(){
        expect(func()).toEqual(true);

    });
});