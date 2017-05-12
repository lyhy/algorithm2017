jest.dontMock('./strong-password-checker');

describe('strong-password-checker', function(){
    var func = require('./strong-password-checker');
    it('strong-password-checker', function(){
        expect(func()).toEqual(true);

    });
});