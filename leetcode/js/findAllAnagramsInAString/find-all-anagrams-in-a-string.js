/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(!s || !p)return [];
    if(s.length < p.length)return [];

    let ret = [],dictP = {}, dictS = {}, char, counter = 0, max, start;
    for(var j = 0, lenP = p.length; j < lenP; j++){
        if(dictP[p[j]])dictP[p[j]]++;
        else dictP[p[j]] = 1;

        dictS[p[j]] = dictP[p[j]];
        counter++;
    }

    max = counter;


    for(var i = 0, len = s.length; i <=len; i++){
        char = s[i];
        start = i+1-p.length;
        if(typeof dictS[char] !== 'undefined'&& dictS[char] > 0){
            dictS[char]--;
            counter--;
            if(!counter){
                dictS[s[start]]++;
                counter++;
                ret.push(start);
            }
        }else{//reset
            //if( dictS[char] === 0){
            //    i = start +1;
            //}
            //counter = max;
            //dictS = Object.assign({}, dictP);


            if( dictS[char] === 0){
                if(s[start] === char){
                    continue;
                }else{
                    i = start +1;
                    counter = max;
                    dictS = Object.assign({}, dictP);
                }
            }else{
                counter = max;
                dictS = Object.assign({}, dictP);
            }

        }
    }

    return ret;
};


//var s ="cbaebabacd", p= "abc", output = [0, 6];
var s ="abab", p= "ab", output = [0, 1, 2];
//var s = 'abacbabc', p = 'abc', output = [1,2,3,5];
console.log(findAnagrams(s,p));