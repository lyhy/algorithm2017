jest.dontMock('./first-bad-version');

describe('first-bad-version', function(){
    var func = require('./first-bad-version');
    it('first-bad-version', function(){
        expect(func()).toEqual(true);

    });
});