// /*function ListNode(x){
//     this.val = x;
//     this.next = null;
// }*/
function ReverseList(pHead)
{
    // write code here
    var pNode = pHead, arr = [];
    while(pNode !== null){
        arr.push(pNode.val);
        pNode = pNode.next;
    }
    pNode = pHead;
    // 把他再连成链表
    while(pNode !== null){
        pNode.val = arr.pop();
        pNode = pNode.next;
    }
    return pHead;
}

function ReverseList1(pHead)
{
    // write code here
    var pre = null,
        next = null;
    while(pHead !== null){
        next = pHead.next;
        pHead.next = pre;
        pre = pHead;
        pHead = next;
    }
    return pre;
}

