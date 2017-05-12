jest.dontMock('./all-oone-data-structure');

describe('all-oone-data-structure', function(){
    var func = require('./all-oone-data-structure');
    it('all-oone-data-structure', function(){
        expect(func()).toEqual(true);

    });
});