jest.dontMock('./count-complete-tree-nodes');

describe('count-complete-tree-nodes', function(){
    var func = require('./count-complete-tree-nodes');
    it('count-complete-tree-nodes', function(){
        expect(func()).toEqual(true);

    });
});