function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const dataInches = 144;
const convertFeet = inchToFeet(dataInches);
console.log(convertFeet);


const inches = 120;
const feet = inchToFeet(inches);
console.log(feet);