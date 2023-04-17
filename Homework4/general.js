"use strict";






//Task 1

const checkIsDateValid = (date) => {
    const timestamp = Date.parse(date);

    return !isNaN(timestamp);
};

const getTimeRangeBasedUnit = (diff, unit) => {
    let result;

    switch (unit) {
        case "days": {
            result = Math.ceil(diff / (1000 * 60 * 60 * 24));
            break;
        }
        case "hours": {
            result = Math.ceil(diff / (1000 * 60 * 60));
            break;
        }
        case "minutes": {
            result = Math.ceil(diff / (1000 * 60));
            break;
        }
        case "seconds": {
            result = Math.ceil(diff / 1000);
            break;
        }
        default: {
            return "Wrong units!";
        }
    }

    if (result === 1) {
        return result + " " + unit.slice(0, -1);
    }

    return result + " " + unit;
};

const durationBetweenDates = (start, end, units) => {
    if (!checkIsDateValid(start) || !checkIsDateValid(end)) {
        return "Wrong date format!";
    }
    
    const startDate = new Date(start);
    const endDate = new Date(end);
    const modifiedUnits = units.trim().toLowerCase();
    const dateDifference = Math.abs(endDate.getTime() - startDate.getTime());

    return getTimeRangeBasedUnit(dateDifference, modifiedUnits);
};

console.log(durationBetweenDates("01 Aug 1985", "04 Aug 1985", "days"));

document.querySelector(".result1").innerText = 
`1.durationBetweenDates("01 Aug 1985", "04 Aug 1985", "days")\nResult: ${durationBetweenDates("01 Aug 1985", "04 Aug 1985", "days")}\n
2.durationBetweenDates("01 Aug 1985", "04 Aug 1985", "seconds")\nResult: ${durationBetweenDates("01 Aug 1985", "04 Aug 1985", "seconds")}\n
3.durationBetweenDates("0 Aug 1985", 111, "seconds")\nResult: ${durationBetweenDates("0 Aug 1985", 111, "seconds")}\n
4.durationBetweenDates("01 Aug 1985", "04 Aug 1985", "milliseconds")\nResult: ${durationBetweenDates("01 Aug 1985", "04 Aug 1985", "milliseconds")}`;






//Task 2

const priceData = {Apples: "23.4", BANANAS: "48", oRAngGEs: "48.7584",};

const convToLowerCase = (key) => {
    return key.toLowerCase();
}

const roundingPrices = (value) => {

    if (!isNaN(value)) {
        const systemLanguage = window.navigator.language;
        const roundPrice = Number(value).toFixed(2);
        const updatedPrice = Number(roundPrice).toLocaleString(systemLanguage, {style: "currency", currency: "EUR"});

        return updatedPrice;
    }

    return "Wrong price!";
}

function optimizer(data) {
    let result = {};
    for (var i in data) {
        result[convToLowerCase(i)] = roundingPrices(data[i]);
    }

    return result;
}

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData);

document.querySelector(".result2").innerText = `${JSON.stringify(updatedPriceData)} (${typeof(updatedPriceData)})`;






//Task 3

function recursiveOddSumTo(number) {
    if (!isNaN(number) && typeof(number) !== "boolean" && typeof(number) !== "string") {
        if (number === 1) {
            return 1;
        }

        if (number % 2 !== 0) {
            return number + recursiveOddSumTo(number - 2);
        }

        return recursiveOddSumTo(number - 1);
    }

    return "Wrong data!";
}

console.log(recursiveOddSumTo(1));
console.log(recursiveOddSumTo(10));



function iterativeOddSumTo(number) {
    if (!isNaN(number) && typeof(number) !== "boolean" && typeof(number) !== "string") {
        let sum = 0;

        for (let i = 0; i <= number; i++) {
            if (i % 2 !== 0) {
                sum += i;
            }
        }
        
        return sum;
    }

    return "Wrong data!";
}

console.log(iterativeOddSumTo(1));
console.log(iterativeOddSumTo(10));


document.querySelector(".result3").innerText = 
`1.recursiveOddSumTo(1)\nResult: ${recursiveOddSumTo(1)}\n
2.recursiveOddSumTo(10)\nResult: ${recursiveOddSumTo(10)}\n
3.iterativeOddSumTo(1)\nResult: ${iterativeOddSumTo(1)}\n
4.iterativeOddSumTo(10)\nResult: ${iterativeOddSumTo(10)}`;