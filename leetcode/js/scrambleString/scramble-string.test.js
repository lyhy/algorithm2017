jest.dontMock('./scramble-string');

describe('scramble-string', function(){
    var func = require('./scramble-string');
    it('scramble-string', function(){
        expect(func()).toEqual(true);

    });
});