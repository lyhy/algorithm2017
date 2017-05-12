jest.dontMock('./unique-paths');

describe('unique-paths', function(){
    var func = require('./unique-paths');
    it('unique-paths', function(){
        expect(func()).toEqual(true);

    });
});