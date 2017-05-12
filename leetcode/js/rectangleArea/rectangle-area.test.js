jest.dontMock('./rectangle-area');

describe('rectangle-area', function(){
    var func = require('./rectangle-area');
    it('rectangle-area', function(){
        expect(func()).toEqual(true);

    });
});