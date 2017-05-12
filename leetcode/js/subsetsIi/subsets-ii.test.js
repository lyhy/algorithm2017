jest.dontMock('./subsets-ii');

describe('subsets-ii', function(){
    var func = require('./subsets-ii');
    it('subsets-ii', function(){
        expect(func()).toEqual(true);

    });
});