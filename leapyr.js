function leapyear(year) {
    if (year % 400 == 0) {
        console.log("yes! LeapYear");
    }
    else if (year % 4 == 0 && year % 100 != 0) {
        console.log('leap year');
    }
    else {
        console.log('leap year holona!');
    }
}
leapyear(2100);