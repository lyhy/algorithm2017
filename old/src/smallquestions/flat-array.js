function toFlatArray(arr){
    var result = [];
    pushItemToArray(arr, result);
    console.log(arr);
    console.log(result);
    return result;
}

function pushItemToArray(arr, result){
    if(!Array.isArray(arr)){
        result.push(arr);
    } else{
        arr.forEach(function(item){
            pushItemToArray(item, result);
        });
    }
}

module.exports = toFlatArray;