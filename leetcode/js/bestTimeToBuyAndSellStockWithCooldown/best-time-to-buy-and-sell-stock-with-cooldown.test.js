jest.dontMock('./best-time-to-buy-and-sell-stock-with-cooldown');

describe('best-time-to-buy-and-sell-stock-with-cooldown', function(){
    var func = require('./best-time-to-buy-and-sell-stock-with-cooldown');
    it('best-time-to-buy-and-sell-stock-with-cooldown', function(){
        expect(func()).toEqual(true);

    });
});