//一个节点定义如下
function  Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show() {
    return this.data;
}
//二叉查找树
function BST() {
    this.root = null;
    this.insert = insert;
}

function insert(data) {
    let newNode = new Node(data, null, null);
    if(this.root === null){
        this.root = newNode;
    }else{
        let current = this.root, parent;
        while(true){
            parent = current;
            if(data < parent.data){
                current = current.left;
                if(current === null){
                    parent.left = newNode;
                    break;
                }
            }else{
                current = current.right;
                if(current === null){
                    parent.right = newNode;
                    break;
                }
            }
        }
    }
}
function inOrder(node) {
    //中序遍历递归实现 左中右
    if(node === null){
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}
function preOrder(node) {
    //前序遍历递归实现 中左右
    if(node === null){
        console.log(node.show() + " ");
        inOrder(node.left);
        inOrder(node.right);
    }
}
function postOrder(node) {
    //后序遍历递归实现 左右中
    if(node === null){
        inOrder(node.left);
        inOrder(node.right);
        console.log(node.show() + " ");
    }
}

function find(data){
    let curr = this.root;
    while(curr !== null){
        if(curr.data === data){
            return true;
        }else if(curr.data < data){
            curr = curr.left;
        }else{
            curr = curr.right;
        }
    }
    return false;
}

function Fibonacci(n)
{
    // write code here
    if(n === 0){
        return 0;
    }else{
        let num1 = 1,
            num2 = 1,
            sum = num2;
        for (let i = 2; i < n; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return sum;
    }
}

function jumpFloor(number)
{
    // write code here
    if(number === 0){
        return 0;
    }else if(number === 1){
        return 1;
    }
    let num1 = 1,
        num2 = 2,
        sum = num2;
    for (let i = 2; i < number; i ++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
}