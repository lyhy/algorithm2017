jest.dontMock('./repeated-substring-pattern');

describe('repeated-substring-pattern', function(){
    var func = require('./repeated-substring-pattern');
    it('repeated-substring-pattern', function(){
        expect(func()).toEqual(true);

    });
});