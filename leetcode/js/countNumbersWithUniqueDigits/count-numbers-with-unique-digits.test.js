jest.dontMock('./count-numbers-with-unique-digits');

describe('count-numbers-with-unique-digits', function(){
    var func = require('./count-numbers-with-unique-digits');
    it('count-numbers-with-unique-digits', function(){
        expect(func()).toEqual(true);

    });
});