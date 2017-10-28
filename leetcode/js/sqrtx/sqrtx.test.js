jest.dontMock('./sqrtx');

describe('sqrtx', function(){
    var func = require('./sqrtx');
    it('sqrtx', function(){
        var input= 4, output = 2;
        expect(func(input)).toEqual(output);

    });
});