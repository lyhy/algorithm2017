jest.dontMock('./basic-calculator');

describe('basic-calculator', function(){
    var func = require('./basic-calculator');
    it('basic-calculator', function(){
        expect(func()).toEqual(true);

    });
});