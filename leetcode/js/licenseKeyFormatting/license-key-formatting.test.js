jest.dontMock('./license-key-formatting');

describe('license-key-formatting', function(){
    var func = require('./license-key-formatting');
    it('license-key-formatting', function(){
        expect(func()).toEqual(true);

    });
});