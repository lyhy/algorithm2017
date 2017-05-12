jest.dontMock('./partition-equal-subset-sum');

describe('partition-equal-subset-sum', function(){
    var func = require('./partition-equal-subset-sum');
    it('partition-equal-subset-sum', function(){
        expect(func()).toEqual(true);

    });
});