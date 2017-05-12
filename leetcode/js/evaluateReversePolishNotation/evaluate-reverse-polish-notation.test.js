jest.dontMock('./evaluate-reverse-polish-notation');

describe('evaluate-reverse-polish-notation', function(){
    var func = require('./evaluate-reverse-polish-notation');
    it('evaluate-reverse-polish-notation', function(){
        expect(func()).toEqual(true);

    });
});