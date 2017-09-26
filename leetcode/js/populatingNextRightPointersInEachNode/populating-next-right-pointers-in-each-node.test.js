jest.dontMock('./populating-next-right-pointers-in-each-node');

function TreeLinkNode(val) {
    this.val = val;
    this.left = this.right = this.next = null;
}
var root = new TreeLinkNode(1);
var root2 = new TreeLinkNode(2);
var root3 = new TreeLinkNode(3);
var root4 = new TreeLinkNode(4);
var root5 = new TreeLinkNode(5);
var root6 = new TreeLinkNode(6);
var root7 = new TreeLinkNode(7);
root.left = root2;
root.right = root3;
root2.left = root4;
root2.right = root5;
root3.left = root6;
root3.right = root7;


describe('populating-next-right-pointers-in-each-node', function(){
    var func = require('./populating-next-right-pointers-in-each-node');

    it('populating-next-right-pointers-in-each-node', function(){
        console.log(root);
        func(root);
        console.log(root)
        expect(root.left.next).toEqual(root3);

    });
});