var promise = new Promise(function(resolve, reject) {
    if(1 === 0){
        resolve('it works');
    }
    else{
        reject('it breaks');
    }
});

promise.then(function(response){
    //resolved
    console.log(response);
}, function(error){
    //rejected
    console.log(error);
});

//========================
// Another Example with AJAX

var jsonURL = 'https://graph.facebook.com/comments?id=http://www.cafepress.com/mf/52455707/dfr_tshirt';

get(jsonURL).then(function(response) {
    console.log("Success!", JSON.parse(response));
}, function(error) {
    alert("Failed!", error);
});


function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}
