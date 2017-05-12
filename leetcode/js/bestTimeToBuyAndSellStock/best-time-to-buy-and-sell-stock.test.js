jest.dontMock('./best-time-to-buy-and-sell-stock');

describe('best-time-to-buy-and-sell-stock', function(){
    var func = require('./best-time-to-buy-and-sell-stock');
    it('best-time-to-buy-and-sell-stock', function(){
        expect(func()).toEqual(true);

    });
});