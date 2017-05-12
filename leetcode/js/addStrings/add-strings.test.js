jest.dontMock('./add-strings');

describe('add-strings', function(){
    var func = require('./add-strings');
    it('add-strings', function(){
        expect(func()).toEqual(true);

    });
});