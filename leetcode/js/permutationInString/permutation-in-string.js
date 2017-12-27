/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(!s1 || !s2 || s1.length > s2.length)return false;

    var dict1 = {}, dict2 = {}, counter = s1.length, char, start;
    for(var i = 0, len1 = s1.length; i < len1; i++){
        dict1[s1[i]] = dict1[s1[i]] ? dict1[s1[i]] + 1 : 1;
    }
    dict2 = Object.assign({}, dict1);

    for(var j = 0, len2 = s2.length; j < len2;){
        char = s2[j];
        start = j - (s1.length - counter) ;
        if(typeof dict2[char] !== 'undefined' && dict2[char] > 0){
            dict2[char]--;
            counter--;
            if(!counter)return true;
            else j++;
        } else if(dict2[char] === 0 ){
            if(s2[start] === char){
                j++;
            }
            else {
                if(start >= 0)j = start + 1;
                else j++;
                counter = s1.length;
                dict2 = Object.assign({}, dict1);


            }
        }else{
            //restart
            j++;
            counter = s1.length;
            dict2 = Object.assign({}, dict1);
        }

    }

    return false;
    
};

//var s1 = "ab", s2 = "eidbaooo", output = true;
var s1= "ab" ,s2 = "eidboaoo", output = false;
//var s1="adc", s2= "dcda", output = true;
//var s1 = "hello", s2 = "ooolleoooleh";

console.log(checkInclusion(s1, s2));