jest.dontMock('./complex-number-multiplication');

describe('complex-number-multiplication', function(){
    var func = require('./complex-number-multiplication');
    it('complex-number-multiplication', function(){
        expect(func()).toEqual(true);

    });
});