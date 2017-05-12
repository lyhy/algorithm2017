jest.dontMock('./subsets');

describe('subsets', function(){
    var func = require('./subsets');
    it('subsets', function(){
        expect(func()).toEqual(true);

    });
});