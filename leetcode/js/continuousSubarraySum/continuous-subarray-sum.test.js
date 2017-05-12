jest.dontMock('./continuous-subarray-sum');

describe('continuous-subarray-sum', function(){
    var func = require('./continuous-subarray-sum');
    it('continuous-subarray-sum', function(){
        expect(func()).toEqual(true);

    });
});