jest.dontMock('./the-skyline-problem');

describe('the-skyline-problem', function(){
    var func = require('./the-skyline-problem');
    it('the-skyline-problem', function(){
        expect(func()).toEqual(true);

    });
});