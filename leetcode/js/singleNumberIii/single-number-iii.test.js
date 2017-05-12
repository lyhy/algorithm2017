jest.dontMock('./single-number-iii');

describe('single-number-iii', function(){
    var func = require('./single-number-iii');
    it('single-number-iii', function(){
        expect(func()).toEqual(true);

    });
});