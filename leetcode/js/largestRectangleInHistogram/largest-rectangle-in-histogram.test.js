jest.dontMock('./largest-rectangle-in-histogram');

describe('largest-rectangle-in-histogram', function(){
    var func = require('./largest-rectangle-in-histogram');
    it('largest-rectangle-in-histogram', function(){
        var a = [2,1,5,6,2,3], ret = 10;
        expect(func(a)).toEqual(ret);

    });
});