jest.dontMock('./majority-element');

describe('majority-element', function(){
    var func = require('./majority-element');
    it('majority-element', function(){
        expect(func()).toEqual(true);

    });
});