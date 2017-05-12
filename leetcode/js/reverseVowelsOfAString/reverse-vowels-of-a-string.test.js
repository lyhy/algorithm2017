jest.dontMock('./reverse-vowels-of-a-string');

describe('reverse-vowels-of-a-string', function(){
    var func = require('./reverse-vowels-of-a-string');
    it('reverse-vowels-of-a-string', function(){
        expect(func()).toEqual(true);

    });
});