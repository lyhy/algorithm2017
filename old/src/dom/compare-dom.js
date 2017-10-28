function compare(nodeA, nodeB) {
    if ( !nodeA && !nodeB ) return true; //edge case
    if ( nodeA.nodeType === nodeB.nodeType && nodeA.tagName === nodeB.tagName && nodeA.nodeValue === nodeB.nodeValue ){
        var i = 0;
        var childA = nodeA.childNodes[i];
        var childB = nodeB.childNodes[i];
        while(childA && childB){
            if (!compare(childA, childB)) return false; //some child is not equal
            i++;
            childA = nodeA.childNodes[i];
            childB = nodeB.childNodes[i];
        }
        return true; //all children are equal trees compare
    }
    return false; //nodes are not equal
}