function factorial(number) {
    let i = number;
    let result = 1;
    while (i >= 1) {
        console.log(i);
        result = result * i;
        i--;

    }
    return result;
}

const output = factorial(7);
console.log(output);