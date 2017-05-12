jest.dontMock('./word-break');

describe('word-break', function(){
    var func = require('./word-break');
    it('word-break', function(){
        expect(func()).toEqual(true);

    });
});