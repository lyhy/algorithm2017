jest.dontMock('./predict-the-winner');

describe('predict-the-winner', function(){
    var func = require('./predict-the-winner');
    it('predict-the-winner', function(){
        expect(func()).toEqual(true);

    });
});