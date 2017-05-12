jest.dontMock('./integer-to-roman');

describe('integer-to-roman', function(){
    var func = require('./integer-to-roman');
    it('integer-to-roman', function(){
        expect(func()).toEqual(true);

    });
});