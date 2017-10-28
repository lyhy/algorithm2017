var data = [
    { id: "0" },
    {
        id: "1",
        children: [
            {
                id: "1.1",
                children: [
                    {
                        id: "1.1.1",
                        children: [
                            {
                                id: "1.1.1.1",
                                children: [
                                    { id: "1.1.1.1.1" },
                                    { id: "1.1.1.1.2" },
                                    { id: "1.1.1.1.3" }
                                ]
                            },
                            { id: "1.1.1.2" },
                            { id: "1.1.1.3" }
                        ]
                    },
                    { id: "1.1.2" },
                    { id: "1.1.3" },
                ]
            },
            { id: "1.2" },
            { id: "1.3" }
        ]
    },
    { id: "2" },
    { id: "3" }
];
function *processData(data){
    if (!data) { return; }

    for (var i = 0; i< data.length; i++){
        var val = data[i];
        yield val.id;

        if (val.children) {
            yield *processData(val.children);
        }
    }
}
var it = processData(data);
var res = it.next();

while(!res.done){
    console.log(res.value);
    res = it.next();
}