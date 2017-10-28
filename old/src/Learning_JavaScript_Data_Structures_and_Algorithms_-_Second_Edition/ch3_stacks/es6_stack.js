const items = new WeakMap(); //{1} 

class Stack {
    constructor () {
        items.set(this, []); //{2}
    }
    push(element){
        let s = items.get(this); //{3}
        s.push(element);
    }
    pop(){
        let s = items.get(this);
        let r = s.pop();
        return r;
    }
    //other methods
} 