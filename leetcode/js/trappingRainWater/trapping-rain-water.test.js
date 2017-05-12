jest.dontMock('./trapping-rain-water');

describe('trapping-rain-water', function(){
    var func = require('./trapping-rain-water');
    it('trapping-rain-water', function(){
        expect(func()).toEqual(true);

    });
});