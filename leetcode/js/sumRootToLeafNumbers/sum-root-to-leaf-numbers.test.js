jest.dontMock('./sum-root-to-leaf-numbers');

describe('sum-root-to-leaf-numbers', function(){
    var func = require('./sum-root-to-leaf-numbers');
    it('sum-root-to-leaf-numbers', function(){
        expect(func()).toEqual(true);

    });
});