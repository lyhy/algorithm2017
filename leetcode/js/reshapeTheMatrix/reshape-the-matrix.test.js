jest.dontMock('./reshape-the-matrix');

describe('reshape-the-matrix', function(){
    var func = require('./reshape-the-matrix');
    it('reshape-the-matrix', function(){
        expect(func()).toEqual(true);

    });
});