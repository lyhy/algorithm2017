jest.dontMock('./sort-characters-by-frequency');

describe('sort-characters-by-frequency', function(){
    var func = require('./sort-characters-by-frequency');
    it('sort-characters-by-frequency', function(){
        expect(func()).toEqual(true);

    });
});