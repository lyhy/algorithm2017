jest.dontMock('./pacific-atlantic-water-flow');

describe('pacific-atlantic-water-flow', function(){
    var func = require('./pacific-atlantic-water-flow');
    it('pacific-atlantic-water-flow', function(){
        expect(func()).toEqual(true);

    });
});