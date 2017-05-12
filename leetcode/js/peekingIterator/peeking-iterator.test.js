jest.dontMock('./peeking-iterator');

describe('peeking-iterator', function(){
    var func = require('./peeking-iterator');
    it('peeking-iterator', function(){
        expect(func()).toEqual(true);

    });
});