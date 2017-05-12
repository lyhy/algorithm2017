jest.dontMock('./summary-ranges');

describe('summary-ranges', function(){
    var func = require('./summary-ranges');
    it('summary-ranges', function(){
        expect(func()).toEqual(true);

    });
});