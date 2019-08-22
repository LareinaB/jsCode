function deepClone(parent, child) {
    child = child ? child : {};
    for (var key in parent) {
        if(parent.hasOwnProperty(key)){
            if(typeof parent[key] === 'object'){
                child[key] = {}.toString.call(parent[key]) === '[object Object]'
                ? {} : [];
                deepClone(parent[key], child[key]);
            }
            child[key] = parent[key];
        }
    }
    return child;
}