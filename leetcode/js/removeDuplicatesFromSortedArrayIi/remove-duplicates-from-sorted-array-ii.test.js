jest.dontMock('./remove-duplicates-from-sorted-array-ii');

describe('remove-duplicates-from-sorted-array-ii', function(){
    var func = require('./remove-duplicates-from-sorted-array-ii');
    var input = [1,1,1,2,2,3], output =5;
    it('remove-duplicates-from-sorted-array-ii', function(){
        expect(func(input)).toEqual(output);

    });
});