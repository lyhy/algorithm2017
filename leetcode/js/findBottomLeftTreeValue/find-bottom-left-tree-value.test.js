jest.dontMock('./find-bottom-left-tree-value');

describe('find-bottom-left-tree-value', function(){
    var func = require('./find-bottom-left-tree-value');
    it('find-bottom-left-tree-value', function(){
        expect(func()).toEqual(true);

    });
});