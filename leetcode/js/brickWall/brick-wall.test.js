jest.dontMock('./brick-wall');

describe('brick-wall', function(){
    var func = require('./brick-wall');
    it('brick-wall', function(){
        expect(func()).toEqual(true);

    });
});