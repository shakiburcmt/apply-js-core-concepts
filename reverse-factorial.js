function factorial(number) {
    let fact = 1;
    for (let i = number; i >= 1; i--) {
        fact = fact * i;
        console.log(i);
    }
    return fact;
}
const number = 6;
const fact = factorial(number);
console.log("factorial of:", number, fact);