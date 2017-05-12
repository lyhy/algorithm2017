jest.dontMock('./arithmetic-slices');

describe('arithmetic-slices', function(){
    var func = require('./arithmetic-slices');
    it('arithmetic-slices', function(){
        expect(func()).toEqual(true);

    });
});