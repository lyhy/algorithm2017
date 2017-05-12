jest.dontMock('./maximal-square');

describe('maximal-square', function(){
    var func = require('./maximal-square');
    it('maximal-square', function(){
        expect(func()).toEqual(true);

    });
});