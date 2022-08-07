function isMoonUp(time) {
    if (time > 7) {
        return true;
    }
}
var moon = isMoonUp(8)
console.log(moon);



// find grade using switch case

function myGrading(score) {
    var mark;

    switch (true) {
        case (score <= 100 && score >= 90):
            mark = 'A';
            break;
        case (score <= 89 && score >= 80):
            mark = 'B';
            break;
        case (score <= 79 && score >= 70):
            mark = 'C';
            break;
        case (score <= 69 && score >= 60):
            mark = 'D';
            break;
        case (score <= 59 && score >= 0):
            mark = 'F';
            break;

        case (score > 100 && score < 0):
            mark = 'INVALID SCORE';
    }

    return mark;
}

var output = myGrading(70);
console.log(output);