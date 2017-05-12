jest.dontMock('./remove-element');

describe('remove-element', function(){
    var func = require('./remove-element');
    it('remove-element', function(){
        expect(func()).toEqual(true);

    });
});