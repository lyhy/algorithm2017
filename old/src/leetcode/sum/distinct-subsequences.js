function ds(t,s){
    var tSize = t.length,
        sSize = s.length;

    if(tSize > sSize)return 0;

    return 1;

}

module.exports = ds;