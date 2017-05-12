jest.dontMock('./count-of-range-sum');

describe('count-of-range-sum', function(){
    var func = require('./count-of-range-sum');
    it('count-of-range-sum', function(){
        expect(func()).toEqual(true);

    });
});