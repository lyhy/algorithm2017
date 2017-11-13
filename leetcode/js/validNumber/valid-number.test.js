jest.dontMock('./valid-number');

describe('valid-number', function(){
    var func = require('./valid-number');
    it('valid-number', function(){
        var input = '0', output = true;
        //var input = '   0.1  ', output = true;
        //var input = 'abc', output = false;
        //var input = '1 a', output = false;
        //var input = '2e10', output = true;
        expect(func(input)).toEqual(true);

    });
});