jest.dontMock('./beautiful-arrangement');

describe('beautiful-arrangement', function(){
    var func = require('./beautiful-arrangement');
    it('beautiful-arrangement', function(){
        expect(func()).toEqual(true);

    });
});