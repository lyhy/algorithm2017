jest.dontMock('./random-pick-index');

describe('random-pick-index', function(){
    var func = require('./random-pick-index');
    it('random-pick-index', function(){
        expect(func()).toEqual(true);

    });
});