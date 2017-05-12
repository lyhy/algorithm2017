jest.dontMock('./hamming-distance');

describe('hamming-distance', function(){
    var func = require('./hamming-distance');
    it('hamming-distance', function(){
        expect(func()).toEqual(true);

    });
});