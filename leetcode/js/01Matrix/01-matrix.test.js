jest.dontMock('./01-matrix');

describe('01-matrix', function(){
    var func = require('./01-matrix');
    it('01-matrix', function(){
        expect(func()).toEqual(true);

    });
});