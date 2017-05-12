jest.dontMock('./n-queens-ii');

describe('n-queens-ii', function(){
    var func = require('./n-queens-ii');
    it('n-queens-ii', function(){
        expect(func()).toEqual(true);

    });
});