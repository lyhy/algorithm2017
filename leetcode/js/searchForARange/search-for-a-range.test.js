jest.dontMock('./search-for-a-range');

describe('search-for-a-range', function(){
    var func = require('./search-for-a-range');
    it('search-for-a-range', function(){
        expect(func()).toEqual(true);

    });
});