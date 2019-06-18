function studentScores(){
    this.scores = [];
    this.add = add;
    this.average = average;
}
function add(score) {
    this.scores.push(score);
}

function addNum(num1, num2) {
    return num1 + num2;
}

function average(){
    let total = this.scores.reduce(addNum);
    return total / this.scores.length;
}


let studentScore = new studentScores();
studentScore.add(20);
studentScore.add(21);
studentScore.add(19);
console.log(studentScore.average());

