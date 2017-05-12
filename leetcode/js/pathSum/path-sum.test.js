jest.dontMock('./path-sum');

describe('path-sum', function(){
    var func = require('./path-sum');
    it('path-sum', function(){
        expect(func()).toEqual(true);

    });
});