jest.dontMock('./maximal-rectangle');

describe('maximal-rectangle', function(){
    var func = require('./maximal-rectangle');
    it('maximal-rectangle', function(){
        expect(func()).toEqual(true);

    });
});