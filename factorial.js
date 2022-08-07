function sum(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        var s = sum + number[i];
        console.log(i, sum);
    }
    return sum;
}

const myNumber = [4, 5, 6, 7];
sum(myNumber);