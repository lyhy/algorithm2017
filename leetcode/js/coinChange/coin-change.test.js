jest.dontMock('./coin-change');

describe('coin-change', function(){
    var func = require('./coin-change');
    it('coin-change', function(){
        expect(func()).toEqual(true);

    });
});