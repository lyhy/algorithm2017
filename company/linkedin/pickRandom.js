/**
 *How to randomly select a number in an array?
 array: [15, 2, 4, 5, 1, -2, 0]

 Follow-up:
 Given a second array freq where freq[i] represents the occurrence of the ith number in array, how to randomly select a number in array based on the frequency.

 Extra requirement:
 Could you complete the selection in a single-pass(go through each array only once)?
 *
 *
 * https://stackoverflow.com/questions/17250568/randomly-choosing-from-a-list-with-weighted-probabilities
 *
 */



var random = function(input, req) {
    var randomIndex, sum = 0, reqMax = req.reduce(function(a,b){return a + b}, 0), random = Math.floor(Math.random() * reqMax);
    for(var i = 0, len = input.length; i < len; i++){
        sum += req[i];
        if(random <= sum){
            randomIndex = i;
            break;
        }
    }
    console.log(random);
    console.log(randomIndex);

    randomIndex = randomIndex || 0;
    console.log(randomIndex);



    return input[randomIndex]
}

var input = [15, 2, 4, 5, 1, -2, 0];
var req = [3, 4, 1, 2, 6, 8, 9];

console.log(random(input, req));

