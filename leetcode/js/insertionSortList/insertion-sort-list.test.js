jest.dontMock('./insertion-sort-list');

describe('insertion-sort-list', function(){
    var func = require('./insertion-sort-list');
    it('insertion-sort-list', function(){
        expect(func()).toEqual(true);

    });
});