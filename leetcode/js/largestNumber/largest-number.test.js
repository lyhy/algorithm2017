jest.dontMock('./largest-number');

describe('largest-number', function(){
    var func = require('./largest-number');
    it('largest-number', function(){
        expect(func()).toEqual(true);

    });
});