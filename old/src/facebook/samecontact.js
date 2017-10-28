/*
 Given an array of contacts with phone numbers/emails you should detect and union identical contacts.

 For example, given the following contacts array:

 [ [ "John", "john@gmail.com", "john@fb.com"],
 [ "Dan", "dan@gmail.com", "+1234567"],
 [ "john123", "+5412312", "john123@skype.com"],
 [ "john1985", "+5412312", "john@fb.com"] ]

 We can see that john1985, John and john123 are the same person by their contact information.

 We should output

 [[ 0, 2, 3], [1]] (0,2,3 are the same person and 1 is another one)


 * */


//var input = [[ "John", "john@gmail.com", "john@fb.com"],
//    [ "Dan", "dan@gmail.com", "+1234567"],
//    [ "john123", "+5412312", "john123@skype.com"],
//    [ "john1985", "+5412312", "john@fb.com"],
//    [ "Billy Bob", "+3453555", "john123@skype.com"],
//    [ "Sandra", "+224551", "sandra@gmail.com"],
//    [ "Gina", "+3453555", "gina@skype.com"],
//    [ "Virgil", "+224551", "virgil@skype.com"]];

var input = [ [ "John", "john@gmail.com", "john@fb.com"],
    [ "Dan", "dan@gmail.com", "+1234567"],
    [ "john123", "+5412312", "john123@skype.com"],
    [ "john1985", "+5412312", "john@fb.com"] ];

var contacts = (function(){

    var nodes = {};

    function Node (index) {
        this.visited = false;
        this.linked = [];
        this.index = index;
    }

    Node.prototype.linkTo = function (node) {
        this.linked.push(node);
    };

    Node.prototype.isVisited = function () {
        return this.visited;
    };

    Node.prototype.getCluster = function (output) {

        var i = 0;
        var linkedLength = this.linked.length;

        output || (output = []);

        this.visited = true;
        output.push(this.index);

        for (i; i < linkedLength; i++) {
            if (!nodes[this.linked[i]].isVisited()) {
                nodes[this.linked[i]].getCluster(output);
            }
        }

        // make it pretty
        return output.sort();
    }

    return {
        findIdenticalContacts: function (input) {

            var i, j, row, rowLength, rowEntry, node;

            var map = {};

            for (i in input) {

                row = input[i];
                rowLength = row.length;
                node = new Node(i);

                nodes[i] = node;

                for (j = 0; j < rowLength; j++) {

                    rowEntry = row[j];

                    if (map[rowEntry]) {
                        node.linkTo(map[rowEntry]);
                        nodes[map[rowEntry]].linkTo(i);
                    }

                    map[rowEntry] = i;
                }
            }

            for (i in nodes) {
                node = nodes[i];

                if (!node.isVisited()) {
                    // doing console out, we can do one extra step to push all these into output
                    console.log(node.getCluster());
                }
            }

        }
    };

}());

contacts.findIdenticalContacts(input);