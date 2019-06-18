 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length === 0 || vin.length === 0){
        return null;
    }else{
        let root = pre[0],
            tree = new TreeNode(root);
        //找到根节点在中序中的位置
        let index = vin.indexOf(root);
        tree.left = reConstructBinaryTree(pre.slice(1, index+1), vin.slice(0, index));
        tree.right = reConstructBinaryTree(pre.slice(index+1), vin.slice(index+1));
        return tree;
    }
}

 function reConstructBinaryTree1(post, vin)
 {
     // write code here
     if(post.length === 0 || vin.length === 0){
         return null;
     }else{
         //序列长度
         let t_length = post.length;
         //后序最后一个元素是根节点
         let root = post[t_length-1],
             tree = new TreeNode(root);
         //找到根节点在中序中的位置
         let index = vin.indexOf(root);
         //左右子树分别递归，注意递归时的下标
         tree.left = reConstructBinaryTree(post.slice(0, index), vin.slice(0, index));
         tree.right = reConstructBinaryTree(post.slice(index+1), vin.slice(index, length-2));
         return tree;
     }
 }