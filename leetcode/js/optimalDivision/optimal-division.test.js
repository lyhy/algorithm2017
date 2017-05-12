jest.dontMock('./optimal-division');

describe('optimal-division', function(){
    var func = require('./optimal-division');
    it('optimal-division', function(){
        expect(func()).toEqual(true);

    });
});