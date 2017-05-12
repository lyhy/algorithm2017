jest.dontMock('./zigzag-conversion');

describe('zigzag-conversion', function(){
    var func = require('./zigzag-conversion');
    it('zigzag-conversion', function(){
        expect(func()).toEqual(true);

    });
});