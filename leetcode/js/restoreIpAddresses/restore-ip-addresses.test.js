jest.dontMock('./restore-ip-addresses');

describe('restore-ip-addresses', function(){
    var func = require('./restore-ip-addresses');
    it('restore-ip-addresses', function(){
        expect(func()).toEqual(true);

    });
});