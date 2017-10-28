/**
 *
 * 排列组合算法用途广泛, 需要掌握, 为降低门槛, 本文主要关注算法的逻辑和简易性, 未重视算法效率. 结合网络书本上的实现和自己的需求, 这里列有四个目标:
 1. 所有元素的全排列: ab的全排列是ab, ba(顺序相关);
 2. 所有元素的全组合: ab的全组合是a, b, ab(顺序无关);
 3. 求n个元素中选取m个元素的组合方式有哪些: abc中选2个元素的组合是ab, ac, bc;
 4. 求n个元素中选取m个元素的排列方式有哪些: abc中选2个元素的排列是ab, ba, ac, ca, bc, cb;

 可以发现, 求n个元素中选取m个元素的排列方式其实是在求出n个元素中选取m个元素的组合方式后, 对每个组合组成的元素集(数组)做全排列, 所以它是一个拼装函数
 */

function main(a){
    var retArray = [];
    permutation(a, 0, testingArray.length-1, retArray);

    console.log('total number = ' + retArray.length);
    retArray.forEach(function(item){
        console.log(item);
    });

}

function swap(a, i, j){
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}
function permutation(a, start, end, retArray){
    if(start === end){
        retArray.push(a.join(''));
    }else{
        for(var i = start; i <=end; i++){
            //if(a[start]!==a[i]){
                swap(a, start, i);
                permutation(a, start + 1, end, retArray);
                swap(a, start, i);
            //}
        }
    }
};

var testingArray = [1,2,3];

//main(testingArray);
//google 0,1,?, ? could be 0,1, list all string
function hasDuplicate (a, start, end){
    for(var i = start; i <end; i++){
        if(a[i] === a[end]){
            return true;
        }
    }
    return false;
}

function googleMain(){
    //[0].forEach(function(item){
    //    var retArray = [];
    //
    //});
    var retArray = [];
    permutation([1, 2,3], 0, 2, retArray);
    retArray.forEach(function(aitem){
        console.log(aitem);
    });
}

googleMain();

