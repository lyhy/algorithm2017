jest.dontMock('./n-queens');

describe('n-queens', function(){
    var func = require('./n-queens');
    it('n-queens', function(){
        expect(func()).toEqual(true);

    });
});