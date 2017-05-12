jest.dontMock('./spiral-matrix');

describe('spiral-matrix', function(){
    var func = require('./spiral-matrix');
    it('spiral-matrix', function(){
        expect(func()).toEqual(true);

    });
});