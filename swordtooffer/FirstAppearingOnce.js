//Init module if you need
var map = {};
function Init()
{
    // write code here
    map = {};
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    if(!map[ch]){
        map[ch] = 1;
    } else {
        map[ch] ++
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for(var ch in map){
        if(map.hasOwnProperty(ch)){
            if(map[ch] === 1){
                return ch;
            }
        }
    }
    return "#"
}
Insert("g");
Insert("o");
Insert("o");
Insert("g");
Insert("l");
Insert("e");
console.log(map);
console.log(map.hasOwnProperty("l"));
console.log(map["l"]);
console.log(FirstAppearingOnce());
