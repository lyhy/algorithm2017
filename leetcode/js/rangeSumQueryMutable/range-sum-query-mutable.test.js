jest.dontMock('./range-sum-query-mutable');

describe('range-sum-query-mutable', function(){
    var func = require('./range-sum-query-mutable');
    it('range-sum-query-mutable', function(){
        expect(func()).toEqual(true);

    });
});