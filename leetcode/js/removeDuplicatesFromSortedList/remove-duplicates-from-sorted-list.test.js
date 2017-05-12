jest.dontMock('./remove-duplicates-from-sorted-list');

describe('remove-duplicates-from-sorted-list', function(){
    var func = require('./remove-duplicates-from-sorted-list');
    it('remove-duplicates-from-sorted-list', function(){
        expect(func()).toEqual(true);

    });
});