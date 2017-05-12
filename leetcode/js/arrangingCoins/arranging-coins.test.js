jest.dontMock('./arranging-coins');

describe('arranging-coins', function(){
    var func = require('./arranging-coins');
    it('arranging-coins', function(){
        expect(func()).toEqual(true);

    });
});