jest.dontMock('./search-a-2d-matrix');

describe('search-a-2d-matrix', function(){
    var func = require('./search-a-2d-matrix');
    it('search-a-2d-matrix', function(){
        expect(func()).toEqual(true);

    });
});