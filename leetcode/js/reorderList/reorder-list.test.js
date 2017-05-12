jest.dontMock('./reorder-list');

describe('reorder-list', function(){
    var func = require('./reorder-list');
    it('reorder-list', function(){
        expect(func()).toEqual(true);

    });
});