jest.dontMock('./roman-to-integer');

describe('roman-to-integer', function(){
    var func = require('./roman-to-integer');
    it('roman-to-integer', function(){
        var str ='LXXXVI', val =86;
        //var str ='MDCC', val =1700;
        //var str ='IV', val =4;
        expect(func(str)).toEqual(val);

    });
});