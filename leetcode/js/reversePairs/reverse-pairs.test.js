jest.dontMock('./reverse-pairs');

describe('reverse-pairs', function(){
    var func = require('./reverse-pairs');
    it('reverse-pairs', function(){
        expect(func()).toEqual(true);

    });
});