jest.dontMock('./max-points-on-a-line');

describe('max-points-on-a-line', function(){
    var func = require('./max-points-on-a-line');
    it('max-points-on-a-line', function(){
        expect(func()).toEqual(true);

    });
});