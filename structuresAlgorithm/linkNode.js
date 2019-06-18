function linkNode(element){
    this.element = element;
    this.next = null;
}
function LList() {
    this.head = new linkNode("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}

function printListFromTailToHead(head)
{
    let linkList = [];
    while(head){
        linkList.unshift(head.element)
        head = head.next;
    }
    return linkList;
}

function find(item) {
    let currNode = this.head;
    while(currNode.element !== item){
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    let newNode = new linkNode(newElement);
    let currNode = find(item);
    newElement.next = currNode.next;
    currNode.next = newNode;
}

function finPre(item) {
    let currNode = this.head;
    while(!(currNode.next === null) && currNode.next.element !== item){
        currNode = currNode.next;
    }
    return currNode;
}
function remove(item) {
    let preNode = finPre(item);
    if(!(preNode.next === null)){
        preNode.next = preNode.next.next;
    }
}