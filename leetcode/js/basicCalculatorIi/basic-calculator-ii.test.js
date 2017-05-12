jest.dontMock('./basic-calculator-ii');

describe('basic-calculator-ii', function(){
    var func = require('./basic-calculator-ii');
    it('basic-calculator-ii', function(){
        expect(func()).toEqual(true);

    });
});