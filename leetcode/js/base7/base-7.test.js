jest.dontMock('./base-7');

describe('base-7', function(){
    var func = require('./base-7');
    it('base-7', function(){
        expect(func()).toEqual(true);

    });
});