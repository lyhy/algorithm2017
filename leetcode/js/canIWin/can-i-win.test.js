jest.dontMock('./can-i-win');

describe('can-i-win', function(){
    var func = require('./can-i-win');
    it('can-i-win', function(){
        expect(func()).toEqual(true);

    });
});