jest.dontMock('./first-unique-character-in-a-string');

describe('first-unique-character-in-a-string', function(){
    var func = require('./first-unique-character-in-a-string');
    it('first-unique-character-in-a-string', function(){
        expect(func()).toEqual(true);

    });
});