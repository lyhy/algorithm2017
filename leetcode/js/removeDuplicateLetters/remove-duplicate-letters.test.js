jest.dontMock('./remove-duplicate-letters');

describe('remove-duplicate-letters', function(){
    var func = require('./remove-duplicate-letters');
    it('remove-duplicate-letters', function(){
        expect(func()).toEqual(true);

    });
});