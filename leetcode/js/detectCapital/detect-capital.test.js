jest.dontMock('./detect-capital');

describe('detect-capital', function(){
    var func = require('./detect-capital');
    it('detect-capital', function(){
        expect(func()).toEqual(true);

    });
});