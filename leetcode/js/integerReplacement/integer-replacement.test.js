jest.dontMock('./integer-replacement');

describe('integer-replacement', function(){
    var func = require('./integer-replacement');
    it('integer-replacement', function(){
        expect(func()).toEqual(true);

    });
});