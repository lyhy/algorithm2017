jest.dontMock('./candy');

describe('candy', function(){
    var func = require('./candy');
    it('candy', function(){
        expect(func()).toEqual(true);

    });
});