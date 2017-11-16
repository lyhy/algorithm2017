    /**
     * Given two nodes of a tree,
     * method should return the deepest common ancestor of those nodes.
     *
     * A
     * / \
     * B C
     * / \ \
     * D E H
     * / \
     * G F
     *
     * commonAncestor(D, F) = B
     * commonAncestor(C, G) = A
     * commonAncestor(E, B) = B
     */
    //Node commonAncestor(Node one, Node two);



var Node = function(x) {
    this.x = x;
}

var FirstCommonAncestor = function(n1, n2){
    if(n1.x === n2.x)return n1;
    var l1 = [], a1 = n1, l2 = [], a2 = n2, common = null, c1, c2;
    while(a1){
        l1.push(a1);
        a1 = a1.parent;
    }

    while(a2){
        l2.push(a2);
        a2 = a2.parent;
    }

    c1 = l1.length;
    c2 = l2.length;
    while(c1 > 0 && c2 > 0){
        if(l1[c1 -1].x !== l2[c2-1].x){
            common = l1[c1];
            break;
        }
        c1--;
        c2--;
    }


    if(!common){
        if(c1 === 0){
            return l1[0]
        }

        if(c2 === 0){
            return l2[0]
        }

    }

    return common;

}

var G = new Node('G');
var F = new Node('F');
var D = new Node('D');
var E = new Node('E');
var H = new Node('H');
var B = new Node('B');
var C = new Node('C');
var A = new Node('A');
A.left = B;
A.right = C;
B.parent = A;
C.parent = A;

B.left = D;
B.right = E;
D.parent = B;
E.parent = B;

C.right = H;
H.parent = C;

D.left =  G;
G.parent = D;

E.right = F;
F.parent = E;

    //console.log(FirstCommonAncestor(D,F).x);
    console.log(FirstCommonAncestor(E,B).x);