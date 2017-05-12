jest.dontMock('./pascals-triangle');

describe('pascals-triangle', function(){
    var func = require('./pascals-triangle');
    it('pascals-triangle', function(){
        expect(func()).toEqual(true);

    });
});