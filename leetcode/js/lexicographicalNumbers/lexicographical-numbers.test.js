jest.dontMock('./lexicographical-numbers');

describe('lexicographical-numbers', function(){
    var func = require('./lexicographical-numbers');
    it('lexicographical-numbers', function(){
        expect(func()).toEqual(true);

    });
});