jest.dontMock('./find-largest-value-in-each-tree-row');

describe('find-largest-value-in-each-tree-row', function(){
    var func = require('./find-largest-value-in-each-tree-row');
    it('find-largest-value-in-each-tree-row', function(){
        expect(func()).toEqual(true);

    });
});