jest.dontMock('./convert-a-number-to-hexadecimal');

describe('convert-a-number-to-hexadecimal', function(){
    var func = require('./convert-a-number-to-hexadecimal');
    it('convert-a-number-to-hexadecimal', function(){
        expect(func()).toEqual(true);

    });
});