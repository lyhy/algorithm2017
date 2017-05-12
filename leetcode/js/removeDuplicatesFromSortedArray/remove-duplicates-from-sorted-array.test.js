jest.dontMock('./remove-duplicates-from-sorted-array');

describe('remove-duplicates-from-sorted-array', function(){
    var func = require('./remove-duplicates-from-sorted-array');
    it('remove-duplicates-from-sorted-array', function(){
        expect(func()).toEqual(true);

    });
});