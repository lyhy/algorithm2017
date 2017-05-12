jest.dontMock('./validate-ip-address');

describe('validate-ip-address', function(){
    var func = require('./validate-ip-address');
    it('validate-ip-address', function(){
        expect(func()).toEqual(true);

    });
});