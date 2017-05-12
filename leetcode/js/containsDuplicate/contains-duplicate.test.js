jest.dontMock('./contains-duplicate');

describe('contains-duplicate', function(){
    var func = require('./contains-duplicate');
    it('contains-duplicate', function(){
        expect(func()).toEqual(true);

    });
});