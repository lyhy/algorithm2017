jest.dontMock('./string-to-integer-atoi');

describe('string-to-integer-atoi', function(){
    var func = require('./string-to-integer-atoi');
    it('string-to-integer-atoi', function(){
        var input = '-1234u', ret = -1234;
        expect(func(input)).toEqual(ret);

    });
});