jest.dontMock('./flatten-binary-tree-to-linked-list');

describe('flatten-binary-tree-to-linked-list', function(){
    var func = require('./flatten-binary-tree-to-linked-list');
    it('flatten-binary-tree-to-linked-list', function(){
        expect(func()).toEqual(true);

    });
});