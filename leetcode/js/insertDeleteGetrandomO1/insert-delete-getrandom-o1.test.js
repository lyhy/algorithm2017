jest.dontMock('./insert-delete-getrandom-o1');

describe('insert-delete-getrandom-o1', function(){
    var func = require('./insert-delete-getrandom-o1');
    it('insert-delete-getrandom-o1', function(){
        expect(func()).toEqual(true);

    });
});