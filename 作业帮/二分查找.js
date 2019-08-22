function bsearch(array,low,high,target)
{
    if (low > high) return -1;
    var mid = Math.floor((low + high)/2);
    if (array[mid]> target){
        return  bsearch(array, low, mid -1, target);
    } else if (array[mid]< target){
        return  bsearch(array, mid+1, high, target);
    }else{return mid;}

}
