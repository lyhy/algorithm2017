jest.dontMock('./find-all-duplicates-in-an-array');

describe('find-all-duplicates-in-an-array', function(){
    var func = require('./find-all-duplicates-in-an-array');
    it('find-all-duplicates-in-an-array', function(){
        expect(func()).toEqual(true);

    });
});