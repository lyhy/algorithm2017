jest.dontMock('./insert-delete-getrandom-o1-duplicates-allowed');

describe('insert-delete-getrandom-o1-duplicates-allowed', function(){
    var func = require('./insert-delete-getrandom-o1-duplicates-allowed');
    it('insert-delete-getrandom-o1-duplicates-allowed', function(){
        expect(func()).toEqual(true);

    });
});