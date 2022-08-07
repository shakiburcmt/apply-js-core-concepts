function oddEvenFromArray(numbers) {
    let onlyodd = [];
    for (let i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (element % 2 == 0) {
            console.log("even");
        }
        else {
            console.log("odd");
            onlyodd.push(element);
        }

    }
    var sum = 0;
    for (i = 0; i < onlyodd.length; i++) {
        sum = sum + onlyodd[i];
        // console.log(sum);
    }
    return {
        odd_array: onlyodd,
        sum: sum
    }
}

array = [3, 4, 5, 7, 7, 3, 4, 1];
const odd = oddEvenFromArray(array);
const onlyOdd = odd.odd_array;
console.log(onlyOdd);
const sum = odd.sum;
console.log(sum);