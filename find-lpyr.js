function findLeapYear(input) {
    let lpyr_array = [];
    for (let i = 0; i < input.length; i++) {
        const year = input[i];
        if (year % 400 == 0) {
            console.log("LeapYer");
        }
        else if (year % 4 == 0 && year % 100 != 0) {
            console.log("LeapYear");
            lpyr_array.push(year);
        }
        else {
            console.log("general year");
        }
    }
    return lpyr_array;
}
yeararray = [2023, 1900, 2024, 2025, 2028, 2030, 2016, 2020];
const lp = findLeapYear(yeararray);
console.log(lp);