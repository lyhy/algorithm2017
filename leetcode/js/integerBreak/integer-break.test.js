jest.dontMock('./integer-break');

describe('integer-break', function(){
    var func = require('./integer-break');
    it('integer-break', function(){
        expect(func()).toEqual(true);

    });
});