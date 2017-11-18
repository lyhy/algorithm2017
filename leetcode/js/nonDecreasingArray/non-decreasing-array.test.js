jest.dontMock('./non-decreasing-array');

describe('non-decreasing-array', function(){
    var func = require('./non-decreasing-array');
    it('non-decreasing-array', function(){
        //var a =[4,2,3], val =true;
        var a =[4,3,1], val =true;
        expect(func(a)).toEqual(val);

    });
});