jest.dontMock('./remove-k-digits');

describe('remove-k-digits', function(){
    var func = require('./remove-k-digits');
    it('remove-k-digits', function(){
        expect(func()).toEqual(true);

    });
});