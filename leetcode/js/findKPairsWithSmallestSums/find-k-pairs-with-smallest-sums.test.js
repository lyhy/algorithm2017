jest.dontMock('./find-k-pairs-with-smallest-sums');

describe('find-k-pairs-with-smallest-sums', function(){
    var func = require('./find-k-pairs-with-smallest-sums');
    it('find-k-pairs-with-smallest-sums', function(){
        expect(func()).toEqual(true);

    });
});