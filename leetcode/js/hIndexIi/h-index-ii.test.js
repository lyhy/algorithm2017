jest.dontMock('./h-index-ii');

describe('h-index-ii', function(){
    var func = require('./h-index-ii');
    it('h-index-ii', function(){
        expect(func()).toEqual(true);

    });
});