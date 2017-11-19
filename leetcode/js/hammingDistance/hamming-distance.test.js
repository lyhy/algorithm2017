jest.dontMock('./hamming-distance');

describe('hamming-distance', function(){
    var func = require('./hamming-distance');
    it('hamming-distance', function(){
        var x = 1, y = 4, output=2;
        expect(func(x,y)).toEqual(output);

    });
});