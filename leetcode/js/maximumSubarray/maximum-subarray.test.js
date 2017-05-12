jest.dontMock('./maximum-subarray');

describe('maximum-subarray', function(){
    var func = require('./maximum-subarray');
    it('maximum-subarray', function(){
        expect(func()).toEqual(true);

    });
});