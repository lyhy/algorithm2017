jest.dontMock('./rotate-array');

describe('rotate-array', function(){
    var func = require('./rotate-array');
    it('rotate-array', function(){
        expect(func()).toEqual(true);

    });
});