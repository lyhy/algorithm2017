jest.dontMock('./utf-8-validation');

describe('utf-8-validation', function(){
    var func = require('./utf-8-validation');
    it('utf-8-validation', function(){
        expect(func()).toEqual(true);

    });
});