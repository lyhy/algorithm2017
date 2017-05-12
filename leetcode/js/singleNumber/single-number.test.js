jest.dontMock('./single-number');

describe('single-number', function(){
    var func = require('./single-number');
    it('single-number', function(){
        expect(func()).toEqual(true);

    });
});