jest.dontMock('./additive-number');

describe('additive-number', function(){
    var func = require('./additive-number');
    it('additive-number', function(){
        expect(func()).toEqual(true);

    });
});