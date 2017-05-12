jest.dontMock('./binary-watch');

describe('binary-watch', function(){
    var func = require('./binary-watch');
    it('binary-watch', function(){
        expect(func()).toEqual(true);

    });
});