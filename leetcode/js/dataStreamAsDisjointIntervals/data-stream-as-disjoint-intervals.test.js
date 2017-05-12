jest.dontMock('./data-stream-as-disjoint-intervals');

describe('data-stream-as-disjoint-intervals', function(){
    var func = require('./data-stream-as-disjoint-intervals');
    it('data-stream-as-disjoint-intervals', function(){
        expect(func()).toEqual(true);

    });
});