var a = [4, 5, 7, 8, 11];
sum = 0;
for (var i = 0; i < a.length; i++) {
    var num = a[i];
    var sum = sum + a[i];
    console.log(sum);
}

function sumOfArray(numbers) {
    sum = 0
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
}
const myNumber = [2, 4, 5, 6, 7, 8, 3];
sumOfArray(myNumber);