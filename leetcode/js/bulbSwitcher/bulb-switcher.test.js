jest.dontMock('./bulb-switcher');

describe('bulb-switcher', function(){
    var func = require('./bulb-switcher');
    it('bulb-switcher', function(){
        expect(func()).toEqual(true);

    });
});