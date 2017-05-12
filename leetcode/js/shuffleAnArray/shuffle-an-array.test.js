jest.dontMock('./shuffle-an-array');

describe('shuffle-an-array', function(){
    var func = require('./shuffle-an-array');
    it('shuffle-an-array', function(){
        expect(func()).toEqual(true);

    });
});