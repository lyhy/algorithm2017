jest.dontMock('./invert-binary-tree');

describe('invert-binary-tree', function(){
    var func = require('./invert-binary-tree');
    it('invert-binary-tree', function(){
        expect(func()).toEqual(true);

    });
});