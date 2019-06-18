function stack() {
    this.dataScore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    this.dataScore[this.top ++] = element;
}
function pop() {
    return this.dataScore[-- this.top];
}
function peek() {
    return this.dataScore[this.top - 1];
}
function clear(){
    this.top = 0;
}
function length() {
    return this.top;
}

let stack1 = [];
let stack2 = [];
function push(node)
{
    if(stack2.length !== 0){
        stack1.push(stack2.pop());
    }
    stack1.push(node);
}
function pop()
{
    if(stack2.length === 0){
        while(stack1.length !== 0){
            stack2.push(stack1.pop());
        }
    }
    return stack2.pop();
}

let queue1 = [],
    queue2 = [];
function push(node) {
    if(queue1.length === 0){
        queue2.push(node);
    }else{
        queue1.push(node);
    }
}
function pop() {
    if(queue1.length === 0){
        while(queue2.length !== 1){
            queue1.push(queue2.pop());
        }
        return queue2.pop();
    }else{
        while(queue1.length !== 1){
            queue2.push(queue1.pop());
        }
        return queue1.pop();
    }
}