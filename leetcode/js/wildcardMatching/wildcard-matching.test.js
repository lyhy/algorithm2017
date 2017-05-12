jest.dontMock('./wildcard-matching');

describe('wildcard-matching', function(){
    var func = require('./wildcard-matching');
    it('wildcard-matching', function(){
        expect(func()).toEqual(true);

    });
});