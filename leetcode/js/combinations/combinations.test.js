jest.dontMock('./combinations');

describe('combinations', function(){
    var func = require('./combinations');
    it('combinations', function(){
        expect(func()).toEqual(true);

    });
});