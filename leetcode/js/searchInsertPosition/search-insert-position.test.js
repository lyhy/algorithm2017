jest.dontMock('./search-insert-position');

describe('search-insert-position', function(){
    var func = require('./search-insert-position');
    it('search-insert-position', function(){
        expect(func()).toEqual(true);

    });
});