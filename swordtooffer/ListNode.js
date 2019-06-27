function ListNode(x){
    this.val = x;
    this.next = null;
}

ListNode.prototype.insert = function (newX) {
  if(this.val === undefined) {
      this.val = newX;
  }  else {
      var curNode = this;
      while(curNode.next !== null){
          curNode = curNode.next;
      }
      var newNode = new ListNode(newX);
      curNode.next = newNode;
      newNode.next = null;
  }
};

function FindKthToTail(head, k)
{
    // write code here
    if(head  === null){
        return new Error("空链表！")
    }
    if(k <= 0){
        return new Error("k小于等于0！");
    }

    var pre = head,
        last = head;
    for(let i = 1; i < k; i ++){
        if(pre.next !== null){
            pre = pre.next;
        }else{
            return new Error("k值超过链表长度");
        }
    }

    while (pre.next !== null) {
        pre = pre.next;
        last = last.next;
    }
    return last;
}

var node = new ListNode();
node.insert("Kobe");
node.insert("Curry");
node.insert("Russel");
node.insert("Klay");
node.insert("Tracy");

console.log(FindKthToTail(node, 3).val);

function findKfromTail(head, k){
    if(head === null || k <= 0)
        return false;
    var prev = head,
        later = head;
    for(let i = 1; i < k; i ++){
        if(prev.next !== null){
            prev = prev.next;
        }else {
            return false;
        }
    }
    while(prev.next !== null){
        prev = prev.next;
        later = later.next;
    }
    return later;
}

function findKfromTail2(head, k){
    if(head === null || k <= 0)
        return false;
    var currNode = head,
        arr = [];
    while(currNode !== null){
        arr.push(currNode);
        currNode = currNode.next;
    }
    return arr[arr.length - k];
}

