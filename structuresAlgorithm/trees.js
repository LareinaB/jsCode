// function TreeLinkNode(x){
//     this.val = x;
//     this.left = null;
//     this.right = null;
//     this.next = null;
// }
function GetNext(pNode)
{
    // write code here
    if(pNode === null){
        return null;
    }
    //有右子树  找右子树的最左节点
    if(pNode.right !== null){
        pNode = pNode.right;
        while(pNode.left !== null){
            pNode = pNode.left;
        }
        return pNode;
    }
    //没有右子树，但是父节点的左节点
    else if(pNode.next !== null && pNode.next.left === pNode){
        return pNode.next;
    }
    //没有右子树,是父节点的右节点
    else if(pNode.next !== null && pNode.next.right === pNode){
        while(pNode.next !== null && pNode.next.left !== pNode){
            pNode = pNode.next;
        }
        return pNode.next;
    }
    //根节点
    else{
        return pNode.next;
    }
}