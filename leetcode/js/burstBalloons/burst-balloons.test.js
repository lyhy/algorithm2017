jest.dontMock('./burst-balloons');

describe('burst-balloons', function(){
    var func = require('./burst-balloons');
    it('burst-balloons', function(){
        expect(func()).toEqual(true);

    });
});