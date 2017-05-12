jest.dontMock('./number-of-1-bits');

describe('number-of-1-bits', function(){
    var func = require('./number-of-1-bits');
    it('number-of-1-bits', function(){
        expect(func()).toEqual(true);

    });
});