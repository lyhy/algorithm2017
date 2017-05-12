jest.dontMock('./merge-k-sorted-lists');

describe('merge-k-sorted-lists', function(){
    var func = require('./merge-k-sorted-lists');
    it('merge-k-sorted-lists', function(){
        expect(func()).toEqual(true);

    });
});