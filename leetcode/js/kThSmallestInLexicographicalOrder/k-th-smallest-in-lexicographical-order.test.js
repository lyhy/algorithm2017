jest.dontMock('./k-th-smallest-in-lexicographical-order');

describe('k-th-smallest-in-lexicographical-order', function(){
    var func = require('./k-th-smallest-in-lexicographical-order');
    it('k-th-smallest-in-lexicographical-order', function(){
        expect(func()).toEqual(true);

    });
});