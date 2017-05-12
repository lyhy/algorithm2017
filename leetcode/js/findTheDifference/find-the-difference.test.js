jest.dontMock('./find-the-difference');

describe('find-the-difference', function(){
    var func = require('./find-the-difference');
    it('find-the-difference', function(){
        expect(func()).toEqual(true);

    });
});