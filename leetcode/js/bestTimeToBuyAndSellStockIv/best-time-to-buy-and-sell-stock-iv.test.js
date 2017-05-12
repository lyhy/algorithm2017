jest.dontMock('./best-time-to-buy-and-sell-stock-iv');

describe('best-time-to-buy-and-sell-stock-iv', function(){
    var func = require('./best-time-to-buy-and-sell-stock-iv');
    it('best-time-to-buy-and-sell-stock-iv', function(){
        expect(func()).toEqual(true);

    });
});