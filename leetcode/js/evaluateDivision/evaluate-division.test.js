jest.dontMock('./evaluate-division');

describe('evaluate-division', function(){
    var func = require('./evaluate-division');
    it('evaluate-division', function(){
        expect(func()).toEqual(true);

    });
});