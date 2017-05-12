jest.dontMock('./reverse-bits');

describe('reverse-bits', function(){
    var func = require('./reverse-bits');
    it('reverse-bits', function(){
        expect(func()).toEqual(true);

    });
});