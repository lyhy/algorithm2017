jest.dontMock('./length-of-last-word');

describe('length-of-last-word', function(){
    var func = require('./length-of-last-word');
    it('length-of-last-word', function(){
        expect(func()).toEqual(true);

    });
});