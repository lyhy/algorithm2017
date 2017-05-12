jest.dontMock('./ipo');

describe('ipo', function(){
    var func = require('./ipo');
    it('ipo', function(){
        expect(func()).toEqual(true);

    });
});