jest.dontMock('./sqrtx');

describe('sqrtx', function(){
    var func = require('./sqrtx');
    it('sqrtx', function(){
        expect(func()).toEqual(true);

    });
});