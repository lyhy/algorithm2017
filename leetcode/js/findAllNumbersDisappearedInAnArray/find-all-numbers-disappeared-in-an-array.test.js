jest.dontMock('./find-all-numbers-disappeared-in-an-array');

describe('find-all-numbers-disappeared-in-an-array', function(){
    var func = require('./find-all-numbers-disappeared-in-an-array');
    it('find-all-numbers-disappeared-in-an-array', function(){
        expect(func()).toEqual(true);

    });
});