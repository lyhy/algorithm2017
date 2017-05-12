jest.dontMock('./construct-binary-tree-from-inorder-and-postorder-traversal');

describe('construct-binary-tree-from-inorder-and-postorder-traversal', function(){
    var func = require('./construct-binary-tree-from-inorder-and-postorder-traversal');
    it('construct-binary-tree-from-inorder-and-postorder-traversal', function(){
        expect(func()).toEqual(true);

    });
});