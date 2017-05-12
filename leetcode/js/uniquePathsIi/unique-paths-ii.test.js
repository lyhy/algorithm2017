jest.dontMock('./unique-paths-ii');

describe('unique-paths-ii', function(){
    var func = require('./unique-paths-ii');
    it('unique-paths-ii', function(){
        expect(func()).toEqual(true);

    });
});