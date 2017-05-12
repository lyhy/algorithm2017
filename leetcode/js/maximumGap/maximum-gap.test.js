jest.dontMock('./maximum-gap');

describe('maximum-gap', function(){
    var func = require('./maximum-gap');
    it('maximum-gap', function(){
        expect(func()).toEqual(true);

    });
});