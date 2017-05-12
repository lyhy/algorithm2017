jest.dontMock('./count-and-say');

describe('count-and-say', function(){
    var func = require('./count-and-say');
    it('count-and-say', function(){
        expect(func()).toEqual(true);

    });
});