jest.dontMock('./132-pattern');

describe('132-pattern', function(){
    var func = require('./132-pattern');
    it('132-pattern', function(){
        expect(func()).toEqual(true);

    });
});