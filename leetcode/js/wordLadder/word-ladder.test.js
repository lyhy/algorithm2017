jest.dontMock('./word-ladder');

describe('word-ladder', function(){
    var func = require('./word-ladder');
    it('word-ladder', function(){
        expect(func()).toEqual(true);

    });
});