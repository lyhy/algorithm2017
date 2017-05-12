jest.dontMock('./bulls-and-cows');

describe('bulls-and-cows', function(){
    var func = require('./bulls-and-cows');
    it('bulls-and-cows', function(){
        expect(func()).toEqual(true);

    });
});