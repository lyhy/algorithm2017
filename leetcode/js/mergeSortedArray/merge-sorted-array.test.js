jest.dontMock('./merge-sorted-array');

describe('merge-sorted-array', function(){
    var func = require('./merge-sorted-array');
    it('merge-sorted-array', function(){
        expect(func()).toEqual(true);

    });
});