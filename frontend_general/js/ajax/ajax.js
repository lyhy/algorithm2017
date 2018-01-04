var getApi = function(url, success){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = success;
    xhr.send();
    return xhr;


};

var success = function(req){
    var respTxt = req.currentTarget.response;
    var obj = JSON.parse(respTxt);
    var target = document.querySelector('.result-list');
    target.addEventListener('click', function(e){
        var target = e.target;
        if(target.tagName === 'LI'){
            console.log(target.innerText);
        }
    })
    obj.list.forEach(function(item){
        var li = document.createElement('li');
        li.innerText = item.name + ':' + item.age;
        target.appendChild(li);
    });
};


var jsonPController = function(data){
    console.log(data)
}
var urlJsonP = 'https://leetcode.com/api/problems/all/';
var jsonP = function() {
    var js = document.createElement('script');
    js.src = urlJsonP + '?callback=jsonPController';
    document.body.appendChild(js);
}


var url = '/test.json';

getApi(url, success);
window.addEventListener('load', jsonP, false )