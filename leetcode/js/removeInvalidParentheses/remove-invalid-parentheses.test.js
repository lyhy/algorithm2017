jest.dontMock('./remove-invalid-parentheses');

describe('remove-invalid-parentheses', function(){
    var func = require('./remove-invalid-parentheses');
    it('remove-invalid-parentheses', function(){
        expect(func()).toEqual(true);

    });
});