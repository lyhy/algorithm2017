jest.dontMock('./clone-graph');

describe('clone-graph', function(){
    var func = require('./clone-graph');
    it('clone-graph', function(){
        expect(func()).toEqual(true);

    });
});