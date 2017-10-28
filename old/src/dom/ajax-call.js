function getJSON(url, success, error) {
    'use strict';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            } else {
                error(xhr.responseText);
            }
        }
    };
    xhr.open('GET', url);
    xhr.send();
}

//jsonp
var script = document.createElement('script');
script.src = '//example.com/path/to/jsonp?callback=foo'

document.getElementsByTagName('head')[0].appendChild(script);