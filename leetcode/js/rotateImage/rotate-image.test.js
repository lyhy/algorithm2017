jest.dontMock('./rotate-image');

describe('rotate-image', function(){
    var func = require('./rotate-image');
    it('rotate-image', function(){
        expect(func()).toEqual(true);

    });
});