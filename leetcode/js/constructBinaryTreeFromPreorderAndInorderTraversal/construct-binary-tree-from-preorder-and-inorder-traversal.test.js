jest.dontMock('./construct-binary-tree-from-preorder-and-inorder-traversal');

describe('construct-binary-tree-from-preorder-and-inorder-traversal', function(){
    var func = require('./construct-binary-tree-from-preorder-and-inorder-traversal');
    it('construct-binary-tree-from-preorder-and-inorder-traversal', function(){
        expect(func()).toEqual(true);

    });
});