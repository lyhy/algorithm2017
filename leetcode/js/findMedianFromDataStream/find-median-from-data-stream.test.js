jest.dontMock('./find-median-from-data-stream');

describe('find-median-from-data-stream', function(){
    var func = require('./find-median-from-data-stream');
    it('find-median-from-data-stream', function(){
        expect(func()).toEqual(true);

    });
});