jest.dontMock('./3sum-closest');

describe('3sum-closest', function(){
    var func = require('./3sum-closest');
    it('3sum-closest', function(){
        expect(func()).toEqual(true);

    });
});