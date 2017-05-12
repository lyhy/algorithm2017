jest.dontMock('./wiggle-sort-ii');

describe('wiggle-sort-ii', function(){
    var func = require('./wiggle-sort-ii');
    it('wiggle-sort-ii', function(){
        expect(func()).toEqual(true);

    });
});