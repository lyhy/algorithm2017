jest.dontMock('./remove-boxes');

describe('remove-boxes', function(){
    var func = require('./remove-boxes');
    it('remove-boxes', function(){
        expect(func()).toEqual(true);

    });
});