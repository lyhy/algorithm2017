jest.dontMock('./merge-two-sorted-lists');

describe('merge-two-sorted-lists', function(){
    var func = require('./merge-two-sorted-lists');
    it('merge-two-sorted-lists', function(){
        expect(func()).toEqual(true);

    });
});