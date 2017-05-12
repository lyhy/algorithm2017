jest.dontMock('./sort-colors');

describe('sort-colors', function(){
    var func = require('./sort-colors');
    it('sort-colors', function(){
        expect(func()).toEqual(true);

    });
});