jest.dontMock('./excel-sheet-column-title');

describe('excel-sheet-column-title', function(){
    var func = require('./excel-sheet-column-title');
    it('excel-sheet-column-title', function(){
        expect(func()).toEqual(true);

    });
});