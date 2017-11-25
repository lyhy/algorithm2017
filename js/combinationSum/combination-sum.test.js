jest.dontMock('./combination-sum');

describe('combination-sum', function(){
    var func = require('./combination-sum');
    it('combination-sum', function(){
        expect(func()).toEqual(true);

    });
});