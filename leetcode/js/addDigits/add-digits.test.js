jest.dontMock('./add-digits');

describe('add-digits', function(){
    var func = require('./add-digits');
    it('add-digits', function(){
        expect(func()).toEqual(true);

    });
});