jest.dontMock('./concatenated-words');

describe('concatenated-words', function(){
    var func = require('./concatenated-words');
    it('concatenated-words', function(){
        expect(func()).toEqual(true);

    });
});