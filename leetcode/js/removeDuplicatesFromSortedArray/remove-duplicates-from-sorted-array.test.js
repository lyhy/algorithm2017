jest.dontMock('./remove-duplicates-from-sorted-array');

describe('remove-duplicates-from-sorted-array', function(){
    var func = require('./remove-duplicates-from-sorted-array');
    var input = [1,1,2], output =2;
    it('remove-duplicates-from-sorted-array', function(){
        expect(func(input)).toEqual(output);

    });
});