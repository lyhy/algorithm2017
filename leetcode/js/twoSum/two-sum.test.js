jest.dontMock('./two-sum');

describe('two-sum', function(){
    var func = require('./two-sum');
    it('two-sum', function(){
        expect(func()).toEqual(true);

    });
});