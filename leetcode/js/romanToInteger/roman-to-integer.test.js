jest.dontMock('./roman-to-integer');

describe('roman-to-integer', function(){
    var func = require('./roman-to-integer');
    it('roman-to-integer', function(){
        expect(func()).toEqual(true);

    });
});