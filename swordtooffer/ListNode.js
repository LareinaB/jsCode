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
    if(head.val === undefined){
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
