jest.dontMock('./diagonal-traverse');

describe('diagonal-traverse', function(){
    var func = require('./diagonal-traverse');
    it('diagonal-traverse', function(){
        expect(func()).toEqual(true);

    });
});