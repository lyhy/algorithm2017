jest.dontMock('./shortest-unsorted-continuous-subarray');

describe('shortest-unsorted-continuous-subarray', function(){
    var func = require('./shortest-unsorted-continuous-subarray');
    it('shortest-unsorted-continuous-subarray', function(){
        //var a =[4,2,3], val =true;
        //var a =[2, 6, 4, 8, 10, 9, 15], val =5;
        //var a =[1,2,3,5,4], val =2;
        var a =[1,3,2,4,5], val =2;
        expect(func(a)).toEqual(val);

    });
});