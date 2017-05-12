jest.dontMock('./3sum');

describe('3sum', function(){
    var func = require('./3sum');
    it('3sum', function(){
        expect(func()).toEqual(true);

    });
});