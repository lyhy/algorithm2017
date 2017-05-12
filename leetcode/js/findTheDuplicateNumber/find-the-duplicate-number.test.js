jest.dontMock('./find-the-duplicate-number');

describe('find-the-duplicate-number', function(){
    var func = require('./find-the-duplicate-number');
    it('find-the-duplicate-number', function(){
        expect(func()).toEqual(true);

    });
});