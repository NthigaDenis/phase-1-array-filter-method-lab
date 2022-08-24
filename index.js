// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, string) {
    let myDriver = [];
    drivers.filter(function (driver) {
        if (driver.toLowerCase() === string.toLowerCase()) {
            myDriver.push(driver);
        }
    })
    return myDriver;
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, string.length) === string.toLowerCase() })
}
function matchName(drivers, string) {
    let newDriver = [];
    drivers.filter(function (driver) {
        if (driver.name === string) {
            newDriver.push(driver);

        }
    })
    return newDriver;
}
