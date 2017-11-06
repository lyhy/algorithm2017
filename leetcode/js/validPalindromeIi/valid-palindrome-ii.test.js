jest.dontMock('./valid-palindrome-ii');

describe('valid-palindrome-ii', function(){
    var func = require('./valid-palindrome-ii');
    it('valid-palindrome', function(){
        //var input =  "cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucu", output = true;
        //var input =  "eeccccbebaeeabebccceea", output=false;
        //var input =  "abc", output=false;
        var input =  "aydmda", output=true;
        //var input = ".,";
        expect(func(input)).toEqual(output);

    });
});