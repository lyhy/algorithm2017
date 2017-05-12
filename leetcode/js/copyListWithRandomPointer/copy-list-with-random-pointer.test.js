jest.dontMock('./copy-list-with-random-pointer');

describe('copy-list-with-random-pointer', function(){
    var func = require('./copy-list-with-random-pointer');
    it('copy-list-with-random-pointer', function(){
        expect(func()).toEqual(true);

    });
});