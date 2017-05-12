jest.dontMock('./range-sum-query-2d-immutable');

describe('range-sum-query-2d-immutable', function(){
    var func = require('./range-sum-query-2d-immutable');
    it('range-sum-query-2d-immutable', function(){
        expect(func()).toEqual(true);

    });
});