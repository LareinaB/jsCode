function jumpFloorII(number)
{
    let i = 1;
    while(-- number){
        i *= 2;
    }
    return i;
}

function rectCover(number)
{
    if(number === 0){
        return 0;
    }
    let num1 = 1,
        num2 = 1,
        sum = num2;
    for (let i = 1; i < number; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
}

function rectCover1(number)
{
    if(number === 0){
        return 0;
    }
    let num1 = 1,
        num2 = 2;
    for (let i = 1; i < number; i++) {
        num2 += num1;
        num1 = num2 - num1;
    }
    return num1;
}

console.log(rectCover1(4));

