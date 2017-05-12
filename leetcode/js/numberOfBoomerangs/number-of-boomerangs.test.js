jest.dontMock('./number-of-boomerangs');

describe('number-of-boomerangs', function(){
    var func = require('./number-of-boomerangs');
    it('number-of-boomerangs', function(){
        expect(func()).toEqual(true);

    });
});