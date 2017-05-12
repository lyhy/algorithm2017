jest.dontMock('./multiply-strings');

describe('multiply-strings', function(){
    var func = require('./multiply-strings');
    it('multiply-strings', function(){
        expect(func()).toEqual(true);

    });
});