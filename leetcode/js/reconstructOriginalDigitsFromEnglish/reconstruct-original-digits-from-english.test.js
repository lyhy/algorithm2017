jest.dontMock('./reconstruct-original-digits-from-english');

describe('reconstruct-original-digits-from-english', function(){
    var func = require('./reconstruct-original-digits-from-english');
    it('reconstruct-original-digits-from-english', function(){
        expect(func()).toEqual(true);

    });
});