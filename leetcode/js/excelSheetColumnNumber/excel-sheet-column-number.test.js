jest.dontMock('./excel-sheet-column-number');

describe('excel-sheet-column-number', function(){
    var func = require('./excel-sheet-column-number');
    it('excel-sheet-column-number', function(){
        expect(func()).toEqual(true);

    });
});