jest.dontMock('./ransom-note');

describe('ransom-note', function(){
    var func = require('./ransom-note');
    it('ransom-note', function(){
        expect(func()).toEqual(true);

    });
});