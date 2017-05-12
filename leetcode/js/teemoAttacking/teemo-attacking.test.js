jest.dontMock('./teemo-attacking');

describe('teemo-attacking', function(){
    var func = require('./teemo-attacking');
    it('teemo-attacking', function(){
        expect(func()).toEqual(true);

    });
});