jest.dontMock('./target-sum');

describe('target-sum', function(){
    var func = require('./target-sum');
    it('target-sum', function(){
        expect(func()).toEqual(true);

    });
});