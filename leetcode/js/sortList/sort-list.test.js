jest.dontMock('./sort-list');

describe('sort-list', function(){
    var func = require('./sort-list');
    it('sort-list', function(){
        expect(func()).toEqual(true);

    });
});