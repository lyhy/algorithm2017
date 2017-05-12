jest.dontMock('./word-break-ii');

describe('word-break-ii', function(){
    var func = require('./word-break-ii');
    it('word-break-ii', function(){
        expect(func()).toEqual(true);

    });
});