jest.dontMock('./gas-station');

describe('gas-station', function(){
    var func = require('./gas-station');
    it('gas-station', function(){
        expect(func()).toEqual(true);

    });
});