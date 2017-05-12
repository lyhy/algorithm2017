jest.dontMock('./lfu-cache');

describe('lfu-cache', function(){
    var func = require('./lfu-cache');
    it('lfu-cache', function(){
        expect(func()).toEqual(true);

    });
});