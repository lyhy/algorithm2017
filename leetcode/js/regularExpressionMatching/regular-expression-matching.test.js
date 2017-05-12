jest.dontMock('./regular-expression-matching');

describe('regular-expression-matching', function(){
    var func = require('./regular-expression-matching');
    it('regular-expression-matching', function(){
        expect(func()).toEqual(true);

    });
});