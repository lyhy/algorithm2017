jest.dontMock('./mini-parser');

describe('mini-parser', function(){
    var func = require('./mini-parser');
    it('mini-parser', function(){
        expect(func()).toEqual(true);

    });
});