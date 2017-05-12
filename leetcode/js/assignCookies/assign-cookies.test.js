jest.dontMock('./assign-cookies');

describe('assign-cookies', function(){
    var func = require('./assign-cookies');
    it('assign-cookies', function(){
        expect(func()).toEqual(true);

    });
});