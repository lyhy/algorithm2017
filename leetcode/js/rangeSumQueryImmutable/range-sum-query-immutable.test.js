jest.dontMock('./range-sum-query-immutable');

describe('range-sum-query-immutable', function(){
    var func = require('./range-sum-query-immutable');
    it('range-sum-query-immutable', function(){
        expect(func()).toEqual(true);

    });
});