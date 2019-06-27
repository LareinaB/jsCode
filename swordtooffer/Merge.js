function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    // write code here
    if(pHead1 === null){
        return pHead2
    } else if (pHead2 === null){
        return pHead1
    }
    var mHead = null;
    if(pHead1.val < pHead2.val){
        mHead = pHead1;
        mHead.next = Merge(pHead1.next, pHead2);
    }
    else{
        mHead = pHead2;
        mHead.next = Merge(pHead1, pHead2.next);
    }
    return mHead;
}
