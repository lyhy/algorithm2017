jest.dontMock('./lru-cache');

describe('lru-cache', function(){
    var func = require('./lru-cache');
    it('lru-cache', function(){
        expect(func()).toEqual(true);

    });
});