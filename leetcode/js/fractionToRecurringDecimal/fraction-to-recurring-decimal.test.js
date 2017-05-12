jest.dontMock('./fraction-to-recurring-decimal');

describe('fraction-to-recurring-decimal', function(){
    var func = require('./fraction-to-recurring-decimal');
    it('fraction-to-recurring-decimal', function(){
        expect(func()).toEqual(true);

    });
});