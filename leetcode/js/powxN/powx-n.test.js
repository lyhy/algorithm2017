jest.dontMock('./powx-n');

describe('powx-n', function(){
    var func = require('./powx-n');
    it('powx-n', function(){
        expect(func()).toEqual(true);

    });
});