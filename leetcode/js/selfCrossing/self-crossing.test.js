jest.dontMock('./self-crossing');

describe('self-crossing', function(){
    var func = require('./self-crossing');
    it('self-crossing', function(){
        expect(func()).toEqual(true);

    });
});