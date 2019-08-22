function Trie() {
    this.root = new TrieNode(null);
}
function TrieNode(){
    this.key = key;
    this.children = [];
}

function search(key){
    if(typeof key === "undefined" || this.root.children.length === 0){
        return 0;
    }
    var curNode = this.root.children;
    for(var key in curNode){
        if(this.searchNext(curNode, key)){
            return
        }
    }
    return 0;
}
function searchNext(node, strKey) {
    if(strKey[0] !== node.key){
        return 0;
    } else {
        var children = node.children;
        if(children.length === 0 && strKey.length === 1){
            return children;
        }else if(children.length > 0 && strKey.length > 1){
            for(var key in children){
                if(children[key] === strKey[1]){
                    return searchNext(children[i], strKey.substring(1))
                }
            }
        } else {
           return 0;
        }
    }
}