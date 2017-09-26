jest.dontMock('./evaluate-reverse-polish-notation');

describe('evaluate-reverse-polish-notation', function(){
    var func = require('./evaluate-reverse-polish-notation');
    it('evaluate-reverse-polish-notation', function(){
       //var a = ["2", "1", "+", "3", "*"] , ret = 9;
       //var a = ["4", "13", "5", "/", "+"], ret = 6;
       // var a = ["3","-4","+"], ret = -1;
       // var a = ["4","13","5","/","+"], ret = 6;
        var a = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"], ret = 22;
        expect(func(a)).toEqual(ret);

    });
});