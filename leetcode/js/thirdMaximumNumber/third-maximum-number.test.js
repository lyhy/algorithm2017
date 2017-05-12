jest.dontMock('./third-maximum-number');

describe('third-maximum-number', function(){
    var func = require('./third-maximum-number');
    it('third-maximum-number', function(){
        expect(func()).toEqual(true);

    });
});