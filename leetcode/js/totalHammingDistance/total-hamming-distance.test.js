jest.dontMock('./total-hamming-distance');

describe('total-hamming-distance', function(){
    var func = require('./total-hamming-distance');
    it('total-hamming-distance', function(){
        expect(func()).toEqual(true);

    });
});